import {
  Draft04,
  Draft06,
  Draft07,
  Draft,
  JSONError,
} from 'json-schema-library';

export default class Sales {
  assinanteId!: string;

  id!: string;

  clienteId!: string;

  funcionarioId!: string;

  data!: string;

  dataHoraInicio!: string;

  lojaId!: string;

  dataHoraFim!: string;

  dataHoraVenda!: string;

  xstatus!: number;

  desconto!: number;

  efetiva!: number;

  quantidadeItens!: number;

  quantidadeItensCancelados!: number;

  sequencial!: string;

  tipoDesconto!: string;

  tipoPreco!: string;

  valor!: number;

  valorItensCancelados!: number;

  acrescimo!: number;

  numeroCaixa!: string;

  valorTotalItens!: number;

  chave!: string;

  static tableName = 'vendas';

  static idColumn = ['assinanteId', 'id'];

  static jsonSchema = {
    type: 'object',
    required: ['assinanteId', 'id'],
    properties: {
      assinanteId: {
        description: '',
        type: 'string',
        minLength: 1,
        maxLength: 50,
      },
      id: {
        description: '',
        type: 'string',
        minLength: 1,
        maxLength: 100,
      },
      clienteId: {
        description: '',
        type: 'string',
        maxLength: 100,
      },
      funcionarioId: {
        description: '',
        type: 'string',
        maxLength: 100,
        default: 'N/I',
      },
      data: {
        description: '',
        type: 'string',
      },
      dataHoraInicio: {
        description: '',
        type: 'string',
      },
      lojaId: {
        description: '',
        type: 'string',
        maxLength: 100,
      },
      dataHoraFim: {
        description: '',
        type: 'string',
      },
      dataHoraVenda: {
        description: '',
        type: 'string',
      },
      xstatus: {
        description: '',
        type: 'integer',
      },
      desconto: {
        description: '',
        type: 'number',
      },
      efetiva: {
        description: '',
        type: 'integer',
      },
      quantidadeItens: {
        description: '',
        type: 'integer',
      },
      quantidadeItensCancelados: {
        description: '',
        type: 'integer',
      },
      sequencial: {
        description: '',
        type: 'string',
        maxLength: 50,
      },
      tipoDesconto: {
        description: '',
        type: 'string',
        maxLength: 20,
      },
      tipoPreco: {
        description: '',
        type: 'string',
        maxLength: 20,
      },
      valor: {
        description: '',
        type: 'number',
      },
      valorItensCancelados: {
        description: '',
        type: 'number',
      },
      acrescimo: {
        description: '',
        type: 'number',
      },
      numeroCaixa: {
        description: '',
        type: 'string',
        maxLength: 50,
        default: 'N/I',
      },
      valorTotalItens: {
        description: '',
        type: 'number',
      },
      chave: {
        description: '',
        type: 'string',
        maxLength: 50,
      },
    },
  };

  /**
   * @static
   * @param {*} uncheckedSale
   * @return {*}  {(false | Sales)}
   * @memberof Sales
   */
  static validateSale(uncheckedSale: any): { valid: boolean; errors: any[] } {
    const jsonSchema: Draft = new Draft07(this.jsonSchema);

    const errors: JSONError[] = jsonSchema.validate(uncheckedSale);

    return {
      valid: errors.length === 0,
      errors: errors,
    };
  }
}

