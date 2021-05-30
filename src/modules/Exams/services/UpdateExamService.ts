import { inject, injectable } from 'tsyringe'

import AppError from '@shared/Errors/AppError'

import IExamsRepository from '../repositories/IExamsRepository'
import IUpdateExamDTO from '../DTOS/IUpdateExamDTO'

@injectable()
class UpdateExamService {
  constructor(
    @inject('ExamsRepository') private examsRepository: IExamsRepository
  ) {}

  async execute(data: IUpdateExamDTO | IUpdateExamDTO[]) {
    if (data instanceof Array) {
      const exams = await Promise.all(
        data.map(async (queryExam) => {
          if (queryExam._id.length !== 24)
            return { message: `ExamID: ${queryExam._id} é inválido.` }

          if (queryExam.status) {
            if (
              !(queryExam.status === 'Ativo' || queryExam.status === 'Inativo')
            )
              return {
                message: `ExamID: ${queryExam._id}, alteração de status inválido.`,
              }
          }

          if (queryExam.type) {
            if (
              !(
                queryExam.type === 'Análise Clínica' ||
                queryExam.type === 'Imagem'
              )
            )
              return {
                message: `ExamID: ${queryExam._id}, alteração de tipo inválido.`,
              }
          }

          const matchedLabs = await this.examsRepository.update(queryExam)

          if (matchedLabs <= 0)
            return { message: `ExamID: ${queryExam._id} não encontrado.` }

          const lab = await this.examsRepository.listById(queryExam._id)

          return lab
        })
      )

      return exams
    }

    if (data._id.length !== 24) throw new AppError('ID inválido.')

    const n = await this.examsRepository.update(data)

    if (n <= 0) throw new AppError('Exame não encontrado.', 404)

    const exam = await this.examsRepository.listById(data._id)

    return exam
  }
}

export default UpdateExamService