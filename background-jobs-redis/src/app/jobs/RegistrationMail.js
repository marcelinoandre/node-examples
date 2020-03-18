import Mail from '../lib/Mail'

export default {
  key: 'RegistrationMail',
  async handle({ data }) {
    const { user } = data

    await Mail.sendMail({
      from: 'Queue Test <queueteste@mailtrap.io>',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de usuário',
      html: `Olá, ${user.name}, bem-vindo ao sistema de filas do André :D`
    })
  }
}
