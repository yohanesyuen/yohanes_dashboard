var db_tools = function(opts) {

  var $bal = $("#balance"),
      $baBal = $("#bonus_account_balance");

  function getBalance() {
      var mainBal = parseFloat($bal.text());
      var baBal = parseFloat($baBal.text());

      return mainBal + baBal;
  }

  var dashboard_uri = opts.debug ? 'http://localhost:8000/api/' : 'http://home.yohanesyuen.com/api/';

  var makeContext,
      fetchStates, updateStates,
      fetchConfigs,
      preUpdateDashboard, updateDashboard,
      registerWithDashboard;

  makeContext = function() {
      return {
          state: {},
          config: {}
      };
  };

  preUpdateDashboard = function(ctx, next) {

      for (var name in ctx.state) {
          update_url = 'state_' + name + '_url';

          if (!(update_url in ctx.config['state_urls'])) {
              ctx.config['state_urls'][update_url] = ctx.config['db_surl'];
          }
      }

      updateDashboard(ctx);
  };


  updateDashboard = function(ctx, next) {
      console.log('Updating dashboard');

      for (var name in ctx.state) {
          create_url = dashboard_uri + 'states/';
          update_url = 'state_' + name + '_url';
          update_url = ctx.config['state_urls'][update_url];

          data = {
              account: ctx.config['db_aid'],
              name: name,
              value: ctx.state[name]
          };

          if (update_url === ctx.config['db_surl']) {
              $.post(create_url, data, function(data) {
                  ctx.config['state_urls']['state_' + name + '_url'] = dashboard_uri + 'states/' + data['id'];
              });
          } else {
              $.ajax({
                  url: update_url,
                  type: 'PUT',
                  data: data,
                  success: function(data) {
                      setTimeout(function() {
                          fetchConfigs(ctx);
                      }, 1000);
                  }
              });
          }
      }

      if (typeof next === 'function') {
          return next(ctx);
      }
  };

  updateStates = function(ctx) {
      console.log('Updating states');
      ctx.state['balance'] = getBalance().toFixed(8);
      preUpdateDashboard(ctx);
  };

  fetchStates = function(ctx, next) {
      console.log('Fetching states');
      $.get(ctx.config['db_surl'], function(states) {
          states.forEach(function(state) {
              ctx.state[state['name']] = state['value'];
              update_url = 'state_' + state['name'] + '_url';
              ctx.config['state_urls'][update_url] = dashboard_uri + 'states/' + state['id'] + '/';
          });
          updateStates(ctx);
      });
  }

  fetchConfigs = function(ctx) {
      console.log('Fetching configs');
      url = ctx.config['db_curl'];
      $.get(url, function(configs) {
          if (configs.length > 0) {
              configs.forEach(function(config) {
                  ctx.config[config['name']] = config['value'];
                  update_url = 'config_' + config['name'] + '_url';
                  ctx.config['config_urls'][update_url] = dashboard_uri + 'config/' + config['id'] + '/';
              });
          }
          fetchStates(ctx);
      });
  };

  registerWithDashboard = function(ctx) {
      console.log("Registering with Dashboard");
      url = dashboard_uri + 'accounts/?account_id=' + unsafeWindow.userid;
      $.get(url, function(accounts) {
          if (accounts.length === 1) {
              account = accounts[0]
              ctx.config['userid'] = unsafeWindow.userid;
              ctx.config['db_aid'] = account.id;
              ctx.config['db_surl'] = dashboard_uri + 'states/' + '?account=' + ctx.config['userid'];
              ctx.config['db_curl'] = dashboard_uri + 'configs/' + '?account=' + ctx.config['userid'];
              ctx.config['state_urls'] = {};
              ctx.config['config_urls'] = {};


              fetchConfigs(ctx);

          } else {
              $.post(dashboard_uri + 'accounts/', {
                      account_id: unsafeWindow.userid,
                      name: $('#edit_profile_form_email').val()
                  },
                  function(account) {
                      account = accounts[0]
                      ctx.config['userid'] = unsafeWindow.userid;
                      ctx.config['db_aid'] = account.id;
                      ctx.config['db_surl'] = dashboard_uri + 'states/' + '?account=' + ctx.config['userid'];
                      ctx.config['db_curl'] = dashboard_uri + 'configs/' + '?account=' + ctx.config['userid'];
                      ctx.config['state_urls'] = {};
                      ctx.config['config_urls'] = {};

                      fetchConfigs(ctx);
                  });
          }
      });
  };
};