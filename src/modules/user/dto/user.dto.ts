export type CreateUserDTO = {
  name: string
  email: string
  password: string
  periodo: string
  turma: string
}
export type UserCreatedDTO = {
  id: string
  createdAt: Date
} & CreateUserDTO

export type EmailAndName = {
  email: string
  name: string
}
