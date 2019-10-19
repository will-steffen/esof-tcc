import { I18nTags } from "src/app/enums/i18n-tags";
import { Language } from "src/app/enums/language";
import { LocaleType } from "../locale-type";
import { EnumLocale } from "./enum";
import { CalendarLocale } from "./calendar";

export let Locale: LocaleType = {
    code: Language.PTBR,
    calendar: CalendarLocale,
    label: {
        cleanFilter: 'Limpar',
        searchFilter: 'Consultar',
        actions: 'Ações',
        noResults: 'Sem Resultados',
        filterResult: `Exibindo resultados de ${I18nTags.StarCount} a ${I18nTags.EndCount}, de um total de ${I18nTags.Total}.`,
        saveSuccess: 'Registro salvo com sucesso',
        deleteSuccess: 'Registro excluído com sucesso',
        saveError: 'Erro para salvar o registro',
        yes: 'Sim',
        no: 'Não',
        select: 'Selecione',
        show: 'Mostrar',
        perPage: 'por Página',
        requiredField: 'Campo obrigatório não preenchido',
        cancel: 'Cancelar',
        save: 'Salvar',
        delete: 'Excluir', 
        logout: 'Sair',
        add: 'Incluir',
        showFilter: 'Expandir Filtros',
        hideFilter: 'Recolher Filtros',
        confirmDelete: 'Tem certeza que deseja excluir este registro?',
        confirmLogout: 'Tem certeza que deseja sair do sistema?',
        close: 'Fechar',
        edit: 'Editar',
        back: 'Voltar',
        language: 'Idioma',
        selectLanguage: 'Selecionar Idioma',
        active: 'Ativo',
        exec: 'Executar',
    },

    customer: {
        title: 'Clientes',
        titleDetail: 'Cliente',
        address: 'Endereço',
        birthDate: 'Data de Nascimento',
        planType: 'Tipo de Plano',
        registration: 'Matrícula',
        nextPayment: 'Próximo Pagamento',
        planValue: 'Valor do Plano',
        payment: 'Pagamentos',
        vacation: 'Férias',
        registerPayment: 'Registrar Pagamento',
        registerVacation: 'Agendar Férias',
        message: {
            cpfNotUnique: 'CPF informado já está sendo utilizado.',
            rgNotUnique: 'RG informado já está sendo utilizado.'
        },
    },

    groupClass: {
        title: 'Aulas em Grupo',
        titleDetail: 'Aula em Grupo',
        initHour: 'Hora de Início',
        endHour: 'Hora de Término',
        room: 'Sala',
        name: 'Nome',
        instructor: 'Professor',
        weekDay: 'Dias da Semana'
    },

    home: {
        title: 'Início',
        customers: {
            title: 'Alunos',
            tooltip: 'Clientes cadastrados no sistema'
        },
        exams: {
            title: 'Exames Pendentes',
            tooltip: 'Clientes que estão há mais de 6 meses sem fazer exames'
        },
        payments: {
            title: 'Pagamentos Atrasados',
            tooltip: 'Clientes com pagamentos que estão pendentes'
        },
    },

    instructor: {
        title: 'Professores',
        titleDetail: 'Professor',
        authorizedMuscle: 'Professor de Musculação',
        authorizedGroupClass: 'Professor de Aula em Grupo',
    },

    login: {
        username: 'Usuário',
        password: 'Senha',
        signin: 'Entrar',
        error: 'Usuário ou senha incorretos',
    },

    user: {
        title: 'Usuários',
        titleDetail: 'Usuário',
        type: 'Tipo',
        username: 'Usuário',
        password: 'Senha',
        message: {
            usernameNotUnique: 'Usuário informado já existe',
            notFound: 'Usuário não encontrado',
        },
    },

    personData: {
        name: 'Nome',
        rg: 'RG',
        cpf: 'CPF'
    },

    payment: {
        value: 'Valor',
        date: 'Data de Pagamento',
        registerPayment: 'Registrar Novo Pagamento',
        expectedDate: 'Data Estimada',
        usePeriod: 'Período de Uso',
        vacationDays: 'Dias de Férias',
        message: {
            generalError: 'Falha para registrar o Pagamento',
            noVacationRegistered: 'Nenhum período de férias registrado ainda',
            mustValuePositive: 'O valor informado deve ser maior que zero',
        },
    },

    vacation: {
        initDate: 'Data de Início',
        endDate: 'Data de Retorno',
        daysLeft: 'Dias Restantes',
        periodsLeft: 'Períodos Restantes',
        registerVacation: 'Agendar Período de Férias',
        daysQuantity: 'Quantidade de dias'
    },

    system: {
        modalTitle: 'Simular Data',
        systemDate: 'Data do Sistema',  
        mock: {
            title: 'Dados de Amostra',    
            warning: 'Executar essa rotina criará vários registros de amostra no banco de dados, deseja continuar?',
        }
    },

    enum: EnumLocale
}
