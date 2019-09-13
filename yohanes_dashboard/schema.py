import graphene

import fbc.schema


class Query(fbc.schema.Query, graphene.ObjectType):
    pass

class Mutation(fbc.schema.Mutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
