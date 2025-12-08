export namespace Enums {

    export enum ModeTreeProject {
        None,
        Template,
        PastePartTemplate,
        ExportFiles,
        InitialDataProductionWorkTask,
        ResultDataProductionWorkTask,
        DisabledCheckBoxes
    }

    export enum ModeTreeContextMenu {
        None,
        TreeProject,
        ExportFiles
    }

    export enum ModeView {
        None,
        Create,
        Edit,
        View,
        Permission,
        Files,
        ComplectEdit,
        ComplectView,
        ComplectSchemeView,
        ProjectCalendarScheduler,
        ProjectSAPRContainer,
        ProjectCalendarSchedulerView,
        ProjectTransferringOVPView,
        ProjectNewCalendarSchedulerView,
    }

    export enum TypeNode {
        None,
        Project,
        Stage,
        Subject,
        Section,
        Scheme,
        File,
        TomeChange,
        ArchiveSapfirProject,
        ArchiveSapfirStage,
        ArchiveSapfirSubject,
        ArchiveSapfirSection,
        ArchiveSapfirScheme
    }

    export enum PermittedAction {
        View = 1,
        Edit = 1 << 1,
        Delete = 1 << 2,
        PreviewFile = 1 << 3,
        DownloadViewFileAccess = 1 << 4,
        SetPermission = 1 << 5,
        DownloadEditFileAccess = 1 << 6
    }

    export enum ContractPSDStatus {
        InWork,
        Complect
    }

    export enum MemberPermission {
        User,
        Group,
        Owner,
        Typical
    }

    export enum ShareContainer {
        AutoCAD = 1,
        Revit = 2,
        SaprKRP = 3,
        KASPR = 4
    }

    export enum StageTypeViewType {
        ProjectDocumentation = 1,
        WorkDocumentation = 2,
        Complect = 3,
        GGEProjectDocumentation = 4,
        EngineeringSurvey = 5,
        PermittingDocumentation = 6,
        OtherDocuments = 7,
        ComplectForVE = 8
    }

    export enum SubjectTypeViewType {
        ChooseTome = 0,
        Stage = 1,
        Object = 2,
        Complect = 3,
        GGETechnical = 4,
        GGETechnicalAnswer = 5,
        CustomComplectAny = 6,
        CustomComplectActual = 7,
        CustomComplectNew = 8,
        NewSubcontractor = 9,
        ComplectForVE = 10
    }

    export enum DSSSignStatus {
        None = 0,
        Signed = 1,
        SignError = 2,
        Signing = 3,
        Canceled = 4,
        SMSAutorize = 5,
        SignedDSS = 6
    }

    export enum DSSFileSignStatus {
        None = 0,
        Signed = 1,
        SignError = 2
    }

    export enum SectionTypeViewType {
        Book = 1,
        Part = 2,
        Section = 3,
        Subsection = 4,
        Tom = 5,
        PermittingDocumentation = 6
    }

    export enum SchemeTypeViewType {
        Document = 1,
        Drawing = 2,
        Estimate = 3,
        Tome = 4,
        LocalTZ = 5,
        LocalIRD = 6,
        EstimatePIR = 7,
        Specification = 8,
        StatementOR = 9,
        PermittingDocumentation = 10,
        TomeGGE = 11,
        ArchivalDocument = 12,
        ProjectDocumentationDocument = 13,
        EngineeringSurveyDocument = 14,
        SpecificationASFS = 15,
        MarketAnalysisASFS = 16,
        TomeVE = 17,
    }

    export const Colors = {
        ADD: 'GreenYellow',
        EDIT: 'yellow',
        REMOVE: 'red',
        PERMISSION_TYPICALGROUP: 'lightgrey',
        MAD_FOR_MANGO: '#faa501',
        DARK_RED: '#940e0a',
        WHITE: '#ffffff'
    };

    export enum ExportType {
        WORK = 0,
        OVP = 1,
        OVPGGE = 2,
        OVPCustomer = 3,
        WayBillAndInventory = 4,
        CheckList = 5,
        QRCode = 6
    };

    export enum StageCalendarPlanStatus {
        None = 0,
        TransferSubcontract = 1,
        AcceptSubcontract = 2,
        RejectSubcontract = 3,
        DocumentationTransferGeneral = 4,
        DocumentationAcceptGeneral = 5,
        DocumentationRemarkGeneral = 6,
        QueryCancel = 7,
        Canceled = 8,
        RequestChanges = 9,
        ObjectionChanges = 10,
        SentChangesSubcontract = 11,
        ChangesRejectGeneral = 12,
        ChangesAcceptGeneral = 13,
        MakeChangesSubcontract = 14,

    };

    export enum WorkTaskBaseType {
        Subcontractor = 0,
        Production = 1,
        Veha = 2,
        Agreement = 3,
        TransferringPSD = 4,
        ProductionTemplate = 5,
        VehaTemplate = 6,
        Aggregate = 7,
        RequestForPaperVersion = 8,
        SubSubContractor = 9,
        RemarkOfSubSubContractor = 10, // Обращение по этапу
        ProjectDocs = 11, // ПД
        EntireNodeStageData = 12, // Файлы состава проекта
        Archive = 13, // Передать в архив
        NewSubcontractWorkTask = 14, // Новый субподряд
        OVPWorkTask = 18, // ОВП
        CSOWorkTask = 19, // Архивирование (ЦСО)
        CSOAccessWorkTask = 22, // Доступ в архив (ЦСО)
    };

    export enum CalendarWorkTaskType {
        Production = 'Производственное',
        Cancelled = 'Отмененные',
        Excluded = 'Исключенные',
        Replaced = 'Замененные',
        Subcontractor = 'Субподрядные',
        Veha = 'Веха',
        Ovp = 'ОВП',
        CSO = 'Архивные',
        CalendarSchedule = 'Календарный график'
    }

    export enum WorkTaskStatus {
        QueryCreated = 1,
        QuerySend = 2,
        InWork = 3,
        Canceled = 4,
        QueryDelete = 5,
        Deleted = 6,
        ProductionCompilation = 7,
        ProductionIssued = 8,
        ProductionCancel = 9,
        ProductionAcceptedExecutor = 10,
        ProductionNotAcceptedExecutor = 11,
        ProductionInWork = 12,
        ProductionCheckExecuting = 13,
        ProductionQueryChangingTask = 14,
        ProductionChangingTask = 15,
        ProductionNotAcceptedExecution = 16,
        ProductionDone = 17,
        ProductionReplaced = 18,
        VehaProject = 19,
        VehaCancel = 20,
        VehaDone = 21,
        AgreementCompilation = 22,
        AgreementInWork = 23,
        AgreementDone = 24,
        AgreementCancel = 25,
        TransferringPSDCompilation = 26,
        TransferringPSDSendToCustomer = 27,
        TransferringPSDVerificationByWayBill = 28,
        TransferringPSDReturnedForCompilation_WayBill = 29,
        TransferringPSDReturnedForCompilation_AVR = 30,
        TransferringPSDAcceptedWayBill = 31,
        TransferringPSDAcceptedAVR = 32,
        AcceptedByGenaCustomer = 33,
        AcceptedBySupchikCustomer = 34,
        DocumentationAcceptGeneral = 35,
        AgreementInterrupted = 56,
        TomeRVIAgreementCompilation = 106,
        TomeRVIAgreementInWork = 107,
        TomeRVIAgreementDone = 108,
        TomeRVIAgreementCancel = 109,
        TomeRVIAgreementInterrupted = 110,
        RVIAnnulTomeAgreementCompilation = 126,
        RVIAnnulTomeAgreementInWork = 127,
        RVIAnnulTomeAgreementDone = 128,
        RVIAnnulTomeAgreementCancel = 129,
        RVIAnnulTomeAgreementInterrupted = 130
    };

    export enum SubcontractorWorkTaskStatusType {
        // Составление
        NewSubcontractWorkTaskCompilation = 65,
        // Передан субподрядчику
        NewSubcontractWorkTaskTransferSubcontract = 66,
        // Принят субподрядчиком
        NewSubcontractWorkTaskAcceptSubcontract = 67,
        // Не принят субподрядчиком
        NewSubcontractWorkTaskRejectSubcontract = 68,
        // Передано генпроектировщику
        NewSubcontractWorkTaskDocumentationTransferGeneral = 69,
        // Результат работ, услуг принят
        NewSubcontractWorkTaskDocumentationAcceptGeneral = 70,
        // Возвращено на доработку по АВР
        NewSubcontractWorkTaskDocumentationRemarkGeneral = 71,
        // Отменено
        NewSubcontractWorkTaskCancel = 72,
        // Входной контроль генпроектировщика
        NewSubcontractWorkTaskIncomingInspectionGIP = 135,
        // Принято по накладной
        NewSubcontractWorkTaskAcceptedWayBill = 136,
        // Возвращено на доработку по накладной
        NewSubcontractWorkTaskReturnedForCompilationWayBill = 137,

    }

    /**
     * Статусы заданий ОВП
     */
    export enum OVPWorkTaskStatusType {
        /**
         * В работе
         */
        InProgress = 81,
        /**
         * Завершено
         */
        Completed = 82,
        /**
         * Не принято исполнителем
         */
        RejectByExecutor = 83,
        /**
         * Отменено
         */
        Cancelled = 84,
        /**
         * Задание с типом "Печать", статус "В работе"
         */
        PrintWorkTaskInWorks = 150
    }

    export enum OGWorkTaskStatus {
        // В работе
        ObjectGraphsAgreementInWork = 193,
        // Выполнено
        ObjectGraphsAgreementDone = 194,
        // Отменено
        ObjectGraphsAgreementCancel = 195,
        // Прервано
        ObjectGraphsAgreementInterrupted = 196
    }

    /**
     * Типы статусов заданий на Архивирование(ЦСО)
    */
    export enum CSOWorkTaskStatusType {
        /**
         * Составление
        */
        WorkTaskCompilation = 95,
        /**
         * Выдано
        */
        WorkTaskIssued = 96,
        /**
         * Отменено
        */
        WorkTaskCancel = 97,
        /**
         * В работе
        */
        WorkTaskInWorks = 98,
        /**
         * Не принято исполнителем
        */
        WorkTaskRejectExecutor = 99,
        /**
         * Выполнено
        */
        WorkTaskCompleted = 100,
    }

    /**
     * Тип комплекта, зависящий от наличия томов с изменениями.
    */
    export enum CSOComplectType {
        /**
         * Если у томов комплекта отсутствуют изменения
        */
        TomesWithoutChanges = 0,
        /**
         * Если у всех томов комплекта есть изменения
        */
        TomesWithChanges = 1,
        /**
         * Если имеются тома с изменениями и без них
        */
        ComplicatedTomes = 2
    }

    /**
     * Типы статусов заданий на выдачу доступа в архив
    */
    export enum AccessToCSOWorkTaskStatusType {
        // Выдано
        AccessToCSOWorkTaskIssued = 120,
        // Согласовано
        AccessToCSOWorkTaskAgreed = 121,
        // Не согласовано
        AccessToCSOWorkTaskNotAgreed = 122,
        // Отменено
        AccessToCSOWorkTaskCancel = 123,
        // В работе
        AccessToCSOWorkTaskInWork = 124,
        // Выполнено
        AccessToCSOWorkTaskDone = 125
    }

    export enum TemplateStatus {
        None = 0,
        Compilation = 1,
        Approved = 2,
        Canceled = 3
    };

    export enum AgreementTempExecType {
        //Согласование на основе шаблона БП
        AgreementWithDictionaryBP = 0,
        //Динамическое согласование тома
        AutoGeneratedAgreement = 1,
        //Согласование тома РВИ
        AutoGeneratedAgreementRVI = 2,
        //Согласование тома РВИ-Аннулировано
        RVIAnnulTomeAgreement = 3
    };

    export enum WorkTaskObjectDataEnum {
        // Исходные данные
        Initial = 1,
        // Результат
        Result = 2,
        // Титул
        StageTabTitle = 3,
        // Состав документации
        StageTabSD = 4,
        // Текстовая часть - Таблица должностей
        SchemeTabTextPart = 5,
        // Текстовая часть - Регистрация изменений
        SchemeTabTextPartRegChanges = 6,
        // Приложения
        SchemeTabAttachments = 7,
        // Графическая часть
        SchemeTabGraphicsPart = 8,
        // Лист рег.изменений
        SchemeTabLRI = 9,
        // Разрешение на внесение изменений
        SchemeTabRVI = 10,
        // Информационно-удостоверяющий лист
        SchemeTabInformationVerifyingSheet = 11
    };

    /**
     * Типы существующих разделов (В целях расширяемости, пустые строки не заполнены ничем)
    */
    export enum EPZSectionType {
        // Раздел 2. «Проект полосы отвода»
        Linear_Section2 = 'ППО',

        // Раздел 3. «Технологические и конструктивные решениялинейного объекта. Искусственные сооружения»
        Linear_Section3 = 'ТКР',

        // Раздел 4. «Здания, строения и сооружения, входящие винфраструктуру линейногообъекта»
        Linear_Section4 = 'ИЛО',

        // Раздел 5. «Проект организации строительства»
        Linear_Section5 = 'ПОС',

        // Раздел 6. «Мероприятия по охране окружающей среды»
        Linear_Section6 = 'ООС',

        // Раздел 7. «Мероприятия по обеспечению пожарной безопасности»
        Linear_Section7 = 'ПБ',

        // Раздел 8. «Требования к обеспечению безопасной эксплуатации линейного объекта»
        Linear_Section8 = 'ТБЭ',

        // Пояснительная записка к сметной документации
        Linear_SubSection9_EstimateExplanatoryNote = 'СМ.ПЗ',

        // Сводка затрат
        Linear_SubSection9_CostSummary = 'СМ.СЗ',

        // Сводный сметный расчет
        Linear_SubSection9_SummaryEstimate = 'СМ.ССР',

        // Объектные и локальные расчеты

        Linear_SubSection9_ObjectLocalEstimates = 'СМ.ОЛР',

        // Сметные расчеты на отдельные виды затрат

        Linear_SubSection9_CostsEstimates = 'СМ.ОВЗ',

        // Раздел 10. «Иная документация в случаях, предусмотренных законодательными и иными нормативными правовыми
        // актами Российской Федерации»

        Linear_Section10_IsRoot = 'БЭОС',

        // Декларация промышленной безопасности опасных производственных объектов

        Linear_SubSection10_IndustrialSafetyDeclaration = 'ДПБ',

        // Декларация безопасности гидротехнических сооружений

        Linear_SubSection10_HydraulicStructuresSafetyDeclaration = 'ДБГ',

        // Перечень мероприятий по гражданской обороне, мероприятий по предупреждению чрезвычайных ситуаций природного
        // и
        // техногенного характера, мероприятий по противодействию терроризму для объектов использования атомной энергии
        // (в том числе ядерных установок, пунктов хранения ядерных материалов и радиоактивных веществ), опасных
        // производственных объектов, определяемых таковыми в соответствии с законодательством Российской Федерации,
        // особо опасных, технически сложных, уникальных объектов, объектов обороны и безопасности

        Linear_SubSection10_EventsList = 'ГОЧС',

        // Иная документация, установленная законодательными и иными нормативными правовыми актами Российской Федерации

        Linear_SubSection10_OtherDocuments = 'ИДЗА',

        // Раздел 2. «Схема планировочной организации земельного участка»

        Industrial_Section2 = 'ИЛО1',

        // Раздел 3. «Объемно-планировочные и архитектурные решения»

        Industrial_Section3 = 'АР',

        // Раздел 4. «Конструктивные решения»

        Industrial_Section4 = 'КР',

        // Подраздел «Система электроснабжения»

        Industrial_SubSection5_ElectricitySupply = 'ИОС1',

        // Подраздел «Система водоснабжения»

        Industrial_SubSection5_WaterSupply = 'ИЛО5',

        // Подраздел «Система водоотведения»

        Industrial_SubSection5_WaterRemoval = 'ИЛО6',

        // Подраздел «Отопление, вентиляция и кондиционирование воздуха, тепловые сети»

        Industrial_SubSection5_HeatingVentilation = 'ИОС4',

        // Подраздел «Сети связи»

        Industrial_SubSection5_Communication = 'ИЛО8',

        // Подраздел «Система газоснабжения»

        Industrial_SubSection5_GasSupply = 'ИЛО9',

        // Раздел 6. «Технологические решения»

        Industrial_Section6 = 'ИЛО11',

        // Раздел 7. «Проект организации строительства»

        Industrial_Section7 = 'ПОС',

        // Раздел 8. «Мероприятия по охране окружающей среды»

        Industrial_Section8 = 'ООС',

        // Раздел 9. «Мероприятия по обеспечению пожарной безопасности»

        Industrial_Section9 = 'ПБ',

        // Раздел ''. «Требования к обеспечению безопасной эксплуатации объектов капитального строительства»

        Industrial_Section10 = 'БЭОС',

        // Раздел ''. «Мероприятия по обеспечению доступа инвалидов к объекту капитального строительства»

        Industrial_Section11 = 'ОДИ',

        // Раздел ''. «Смета на строительство, реконструкцию, капитальный ремонт, снос объекта капитального
        // строительства»

        Industrial_Section12_IsRoot = '',

        // Пояснительная записка к сметной документации

        Industrial_SubSection12_EstimateExplanatoryNote = 'СМ.ПЗ',

        // Сводка затрат

        Industrial_SubSection12_CostSummary = 'СМ.СЗ',

        // Сводный сметный расчет

        Industrial_SubSection12_SummaryEstimate = 'СМ.ССР',

        // Объектные и локальные расчеты

        Industrial_SubSection12_ObjectLocalEstimates = 'СМ.ОЛР',

        // Сметные расчеты на отдельные виды затрат

        Industrial_SubSection12_CostsEstimates = 'СМ.ОВЗ',

        // Раздел ''. «Иная документация в случаях, предусмотренных законодательными и иными нормативными правовыми
        // актами Российской Федерации»

        Industrial_Section13_IsRoot = '',

        // Декларация промышленной безопасности опасных производственных объектов

        Industrial_SubSection13_IndustrialSafetyDeclaration = 'ДПБ',

        // Декларация безопасности гидротехнических сооружений

        Industrial_SubSection13_HydraulicStructuresSafetyDeclaration = 'ДБГ',

        // Перечень мероприятий по гражданской обороне, мероприятий по предупреждению чрезвычайных ситуаций природного
        // и
        // техногенного характера, мероприятий по противодействию терроризму для объектов использования атомной энергии
        // (в том числе ядерных установок, пунктов хранения ядерных материалов и радиоактивных веществ), опасных
        // производственных объектов, определяемых таковыми в соответствии с законодательством Российской Федерации,
        // особо опасных, технически сложных, уникальных объектов, объектов обороны и безопасности

        Industrial_SubSection13_EventsList = 'ГОЧС',

        // Иная документация, установленная законодательными и иными нормативными правовыми актами Российской Федерации

        Industrial_SubSection13_OtherDocuments = 'ИДЗА',

        ///---TNonIndustrialObject---

        // Раздел 2. «Схема планировочной организации земельного участка»

        NonIndustrial_Section2 = 'ИЛО1',

        // Раздел 3. «Объемно-планировочные и архитектурные решения»

        NonIndustrial_Section3 = 'АР',

        // Раздел 4. «Конструктивные решения»

        NonIndustrial_Section4 = 'КР',

        // Раздел 5. "Сведения об инженерном оборудовании, о сетях и системах инженерно-технического обеспечения"

        NonIndustrial_Section5_IsRoot = '',

        // Подраздел «Система электроснабжения»

        NonIndustrial_SubSection5_ElectricitySupply = 'ИОС1',

        // Подраздел «Система водоснабжения»

        NonIndustrial_SubSection5_WaterSupply = 'ИЛО5',

        // Подраздел «Система водоотведения»

        NonIndustrial_SubSection5_WaterRemoval = 'ИЛО6',

        // Подраздел «Отопление, вентиляция и кондиционирование воздуха, тепловые сети»

        NonIndustrial_SubSection5_HeatingVentilation = 'ИОС4',

        // Подраздел «Сети связи»

        NonIndustrial_SubSection5_Communication = 'ИЛО8',

        // Подраздел «Система газоснабжения»

        NonIndustrial_SubSection5_GasSupply = 'ИЛО9',

        // Раздел 6. «Технологические решения»

        NonIndustrial_Section6 = 'ИЛО11',

        // Раздел 7. «Проект организации строительства»

        NonIndustrial_Section7 = 'ПОС',

        // Раздел 8. «Мероприятия по охране окружающей среды»

        NonIndustrial_Section8 = 'ООС',

        // Раздел 9. «Мероприятия по обеспечению пожарной безопасности»

        NonIndustrial_Section9 = 'ПБ',

        // Раздел ''. «Требования к обеспечению безопасной эксплуатации объектов капитального строительства»

        NonIndustrial_Section10 = 'БЭОС',

        // Раздел ''. «Мероприятия по обеспечению доступа инвалидов к объекту капитального строительства»

        NonIndustrial_Section11 = 'ОДИ',

        // Раздел ''. «Смета на строительство, реконструкцию, капитальный ремонт, снос объекта капитального
        // строительства»

        NonIndustrial_Section12_IsRoot = '',

        // Пояснительная записка к сметной документации

        NonIndustrial_SubSection12_EstimateExplanatoryNote = 'СМ.ПЗ',

        // Сводка затрат

        NonIndustrial_SubSection12_CostSummary = 'СМ.СЗ',

        // Сводный сметный расчет

        NonIndustrial_SubSection12_SummaryEstimate = 'СМ.ССР',

        // Объектные и локальные расчеты
        NonIndustrial_SubSection12_ObjectLocalEstimates = 'СМ.ОЛР',

        // Сметные расчеты на отдельные виды затрат

        NonIndustrial_SubSection12_CostsEstimates = 'СМ.ОВЗ',

        // Раздел ''. «Иная документация в случаях, предусмотренных законодательными и иными нормативными правовыми
        // актами Российской Федерации»

        NonIndustrial_Section13_IsRoot = '',

        // Декларация промышленной безопасности опасных производственных объектов

        NonIndustrial_SubSection13_IndustrialSafetyDeclaration = 'ДПБ',

        // Декларация безопасности гидротехнических сооружений

        NonIndustrial_SubSection13_HydraulicStructuresSafetyDeclaration = 'ДБГ',

        // Перечень мероприятий по гражданской обороне, мероприятий по предупреждению чрезвычайных ситуаций природного
        // и
        // техногенного характера, мероприятий по противодействию терроризму для объектов использования атомной энергии
        // (в том числе ядерных установок, пунктов хранения ядерных материалов и радиоактивных веществ), опасных
        // производственных объектов, определяемых таковыми в соответствии с законодательством Российской Федерации,
        // особо опасных, технически сложных, уникальных объектов, объектов обороны и безопасности

        NonIndustrial_SubSection13_EventsList = 'ГОЧС',

        // Иная документация, установленная законодательными и иными нормативными правовыми актами Российской Федерации

        NonIndustrial_SubSection13_OtherDocuments = 'ИДЗА',
    }

    export enum CommonFileTypeEnum {
        // zero
        None = 0,
        // Титул
        StageTabTitle = 1,
        // Состав документации
        StageTabSD = 2,
        // Текстовая часть
        SchemeTabTextPart = 3,
        // Приложения
        SchemeTabAttachments = 4,
        // Графическая часть
        SchemeTabGraphicsPart = 5,
        // Лист рег.изменений
        SchemeTabLRI = 6,
        // Разрешение на внесение изменений
        SchemeTabRVI = 7,
        // Информационно-удостоверяющий лист
        SchemeTabInformationVerifyingSheet = 8,
        // Файл книги ПД в формате PDF
        PDFBookOfPD = 9,
        // Файл отчета АН (ЭЖАН)
        EzhanReport = 10,
        // Временно сохраняемые файлы в статусах "Составление", "Составление по АВР", "Составление (гарантийный срок)"
        TransferringPPSDCompilation = 11,
        // Файлы для формирования сводного листа
        UploadedByRolePSDPerson = 12,
        // Сводный лист из загруженных файлов
        SummarySheetOfUploadedFiles = 13
    };

    export enum DictionaryEPZTitleEnum {
        "Ветровой район" = 1,
        "Вид работ" = 2,
        "Вид саморегулируемой организации" = 3,
        "Интенсивность сейсмических воздействий" = 4,
        "Категория земель" = 5,
        "Категория пожарной и взрывопожарной опасности" = 6,
        "Категория сложности инженерно-геологических условий" = 7,
        "Класс опасности опасного производственного объекта" = 8,
        "Класс энергетической эффективности" = 9,
        "Климатический район, подрайон" = 10,
        "Коды субъектов Российской Федерации" = 11,
        "Сведения о месте расположения объекта капитального строительства" = 12,
        "Сведения об отнесении объекта к особо опасным и технически сложным объектам" = 13,
        "Сведения об отнесении объекта к уникальным объектам" = 14,
        "Снеговой район" = 15,
        "Типы документов" = 16,
        "Уровень бюджета" = 17,
        "Уровень ответственности" = 18,
        "Формат модели объекта" = 19,
        "Вид объекта" = 20,
        "Справочник причин изменений" = 21,
        "Коды единиц измерения по ОКЕИ" = 22
    }

    export enum EPZEntityType {
        // Сведения по электронной пояснительной записке
        ExplanatoryNote = 1,
        // Сведения о внесении изм. В ПД
        ExplanatoryNoteModifications = 2,
        // Сведения о генеральном проектировщике
        IssueAuthor = 3,
        // Сведения об ИП и ЮЛ, принявших участие в подготовке ПД (кроме ГП)
        ProjectDocumentationAuthors = 4,
        // Сведения о лицах, подписавших документацию
        Signers = 5,
        // Сведения о застройщике
        Developer = 6,
        // Сведения о техническом заказчике
        TechnicalCustomer = 7,
        // Список используемых сокращений
        UsedAbbreviations = 8,
        // Перечень документов по стандартизации
        UsedNorms = 9,
        // Перечень документов, служащих основанием для подготовки ПД
        ProjectDecisionDocuments = 10,
        // Перечень ИРД
        ProjectInitialDocuments = 11,
        // Перечень отчетной документации по результатам ИИ
        EngineeringSurveyDocuments = 12,
        // Дополнительные материалы, не предусмотренные ПП РФ №87
        AdditionalData = 13,
        // Сведения об источниках финансирования
        FinanceSources = 14,
        // Вид объекта
        LinearNonIndustrialObjectTypes = 15,
        // Дополнительные сведения
        DesignerNote = 16,
        // Клятва ГИПа
        DesignerAssurance = 17,
        //Тип сведений: "1 Сведения и описания линейного объекта"
        // Сведения о принадлежности к объектам транспортной инфраструктуры
        LinearObjectTabType1_1 = 18,
        // Сведения о категории линейного объекта
        LinearObjectTabType1_2 = 19,
        // Сведения о классе линейного объекта
        LinearObjectTabType1_3 = 20,
        // Сведения о линейном объекте
        LinearObjectTabType1_4 = 21,
        // Сведения о наличии помещений с постоянным пребыванием людей
        LinearObjectTabType1_5 = 22,
        // Сведения о комплексном использовании сырья
        LinearObjectTabType1_6 = 23,
        // Сведения об использовании возобновляемых
        LinearObjectTabType1_7 = 24,
        // Сведения об использованных в проекте изобретениях
        LinearObjectTabType1_8 = 25,

        // Сведения о наличии разработанных
        LinearObjectTabType1_9 = 26,

        // Сведения о предполагаемых затратах
        LinearObjectTabType1_10 = 27,

        // Сведения о наличии проекта рекультивации земель
        LinearObjectTabType1_11 = 28,

        // Описание принципиальных проектных решений
        LinearObjectTabType1_12 = 29,


        //Тип сведений: "2 Справочные материалы и описание линейного объекта"

        // Справочники, адреса
        LinearObjectTabType2_1 = 30,

        // Сведения о функциональном назначении
        LinearObjectTabType2_2 = 31,

        // Данные о проектной мощности
        LinearObjectTabType2_3 = 32,

        // Технико-экономические показатели
        LinearObjectTabType2_4 = 33,


        //Тип сведений: "3 Сведения о составных частях объекта, в случае если объект сложный"

        // Одна карточка(табчик) части объекта у линейного (Сложный/Капитальный)
        LinearObjectTabType3_ObjectParts = 34,


        //Тип сведений: "4 Сведения климатические, топливные, энергетические"

        // Сведения о климатической
        LinearObjectTabType4_1 = 35,

        // Описание вариантов маршрутов
        LinearObjectTabType4_2 = 36,

        // Сведения о потребности
        LinearObjectTabType4_3 = 37,

        // Сведения о земельных
        LinearObjectTabType4_4 = 38,

        // Сведения о компьютерных
        LinearObjectTabType4_5 = 39,

        // Обоснование возможности
        LinearObjectTabType4_6 = 40,

        // Сведения о разделах
        LinearObjectTabType4_7 = 41,

        // Дополнительные требования
        LinearObjectTabType4_8 = 42,

        // Представление модели
        LinearObjectTabType4_9 = 43,

        //Тип сведений: "5 Сведения о составе проектной документации линейного объекта"

        // Одна карточка(табчик) разделов/вложенных разделов(секций) у линейного
        LinearObjectTabType5_Sections = 44,
        /**********************************************************/


        /*********** Табчики Производственного объекта ***********/

            //Тип сведений: "1 Справочные материалы и описание производственного объекта"

            // Справочные материалы
        IndustrialObjectTabType1_1 = 45,

        // Сведения о функциональном назначении
        IndustrialObjectTabType1_2 = 46,


        //Тип сведений: "2 Сведения о составных частях объекта, в случае если объект сложный"

        // Одна карточка(табчик) части объекта у производственного (Сложный/Капитальный)
        IndustrialObjectTabType2_ObjectParts = 47,


        //Тип сведений: "3 Сведения и описания производственного объекта"

        // Сведения о принадлежности к объектам транспортной инфраструктуры
        IndustrialObjectTabType3_1 = 48,

        // Сведения о наличии помещений с постоянным пребыванием людей
        IndustrialObjectTabType3_2 = 49,

        // Сведения о комплексном использовании сырья
        IndustrialObjectTabType3_3 = 50,

        // Сведения об использовании возобновляемых
        IndustrialObjectTabType3_4 = 51,

        // Сведения о размере средств
        IndustrialObjectTabType3_5 = 52,

        // Сведения об использованных в проекте изобретениях
        IndustrialObjectTabType3_6 = 53,

        // Сведения о наличии разработанных
        IndustrialObjectTabType3_7 = 54,

        // Сведения о предполагаемых затратах
        IndustrialObjectTabType3_8 = 55,

        // Сведения о наличии проекта рекультивации земель
        IndustrialObjectTabType3_9 = 56,


        //Тип сведений: "4 Сведения климатические, топливные, энергетические"

        // Данные о проектной мощности
        IndustrialObjectTabType4_1 = 57,

        // Технико-экономические показатели
        IndustrialObjectTabType4_2 = 58,

        // Сведения о классе энергетической
        IndustrialObjectTabType4_3 = 59,

        // Сведения о климатической
        IndustrialObjectTabType4_4 = 60,

        // Сведения о потребности объекта
        IndustrialObjectTabType4_5 = 61,

        // Сведения о потребностях производства
        IndustrialObjectTabType4_6 = 62,

        // Сведения о земельных участках
        IndustrialObjectTabType4_7 = 63,

        // Сведения о компьютерных программах
        IndustrialObjectTabType4_8 = 64,

        // Обоснование возможности
        IndustrialObjectTabType4_9 = 65,

        // Сведения о разделах
        IndustrialObjectTabType4_10 = 66,

        // Сведения о разделах и пунктах
        IndustrialObjectTabType4_11 = 67,

        // Представление модели объекта
        IndustrialObjectTabType4_12 = 68,

        // Дополнительные требования
        IndustrialObjectTabType4_13 = 69,


        //Тип сведений: "5 Сведения о составе проектной документации объекта производственного назначения"

        // Одна карточка(табчик) разделов/вложенных разделов(секций) у производственного
        IndustrialObjectTabType5_Sections = 70,
        /**********************************************************/


        /********** Табчики Непроизводственного объекта **********/

            //Тип сведений: "1 Сведения и описание непроизводственного объекта"

            // Сведения о принадлежности к объектам транспортной инфраструктуры
        NonIndustrialObjectTabType1_1 = 71,

        // Сведения о наличии помещений с постоянным пребыванием людей
        NonIndustrialObjectTabType1_2 = 72,

        // Сведения об использовании возобновляемых
        NonIndustrialObjectTabType1_3 = 73,

        // Сведения о размере средств
        NonIndustrialObjectTabType1_4 = 74,

        // Сведения об использованных в проекте изобретениях
        NonIndustrialObjectTabType1_5 = 75,

        // Сведения о наличии разработанных
        NonIndustrialObjectTabType1_6 = 76,

        // Сведения о численности работников
        NonIndustrialObjectTabType1_7 = 77,

        // Сведения о предполагаемых затратах
        NonIndustrialObjectTabType1_8 = 78,

        // Сведения о наличии проекта рекультивации земель
        NonIndustrialObjectTabType1_9 = 79,


        //Тип сведений: "2 Сведения о составных частях объекта, в случае если объект сложный"

        // Одна карточка(табчик) части объекта у непроизводственного (Сложный/Капитальный)
        NonIndustrialObjectTabType2_ObjectParts = 80,


        //Тип сведений: "3 Справочные материалы и описание непроизводственного объекта"

        // Справочные материалы
        NonIndustrialObjectTabType3_1 = 81,

        // Сведения о функциональном назначении
        NonIndustrialObjectTabType3_2 = 82,

        // Данные о проектной мощности
        NonIndustrialObjectTabType3_3 = 83,


        //Тип сведений: "4 Сведения о составе проектной документации объекта непроизводственного назначения"

        // Одна карточка(табчик) разделов/вложенных разделов(секций) у непроизводственного
        NonIndustrialObjectTabType4_Sections = 84,


        //Тип сведений: "5 Сведения климатические, топливные, энергетические"

        // Технико-экономические показатели
        NonIndustrialObjectTabType5_1 = 85,

        // Сведения о классе энергетической эффективности
        NonIndustrialObjectTabType5_2 = 86,

        // Сведения о климатической
        NonIndustrialObjectTabType5_3 = 87,

        // Сведения о потребности объекта
        NonIndustrialObjectTabType5_4 = 88,

        // Сведения о компьютерных
        NonIndustrialObjectTabType5_5 = 89,

        // Обоснование возможности
        NonIndustrialObjectTabType5_6 = 90,

        // Сведения о разделах
        NonIndustrialObjectTabType5_7 = 91,

        // Представление модели объекта
        NonIndustrialObjectTabType5_8 = 92,
    }

    // Тип сведения(одного из, вложенный список "Вид объекта") вида объекта (строка слева)
    export enum EPZInformationOfLinearIndustrialNonIndustrialObjectType {
        /**
         * Сведения и описания линейного объекта
        */
        LinearObjectInformationType1 = 1,

        /**
         * Справочные материалы и описание линейного объекта
        */
        LinearObjectInformationType2 = 2,

        /**
         * Сведения о составных частях объекта, в случае если объект сложный
        */
        LinearObjectInformationType3 = 3,

        /**
         * Сведения климатические, топливные, энергетические
        */
        LinearObjectInformationType4 = 4,

        /**
         * Сведения о составе проектной документации линейного объекта
        */
        LinearObjectInformationType5 = 5,

        //*Вид объекта - Производственный*//

        /**
         * Справочные материалы и описание производственного объекта
        */
        IndustrialObjectInformationType1 = 6,

        /**
         * Сведения о составных частях объекта, в случае если объект сложный
        */
        IndustrialObjectInformationType2 = 7,

        /**
         * Сведения и описания производственного объекта
        */
        IndustrialObjectInformationType3 = 8,

        /**
         * Сведения климатические, топливные, энергетические
        */
        IndustrialObjectInformationType4 = 9,

        /**
         * Сведения о составе проектной документации объекта производственного назначения
        */
        IndustrialObjectInformationType5 = 10,

        //*Вид объекта - Не производственный*//

        /**
         * Сведения и описания непроизводственного объекта
        */
        NonIndustrialObjectInformationType1 = 11,

        /**
         * Сведения о составных частях объекта, в случае если объект сложный
        */
        NonIndustrialObjectInformationType2 = 12,

        /**
         * Справочные материалы и описание непроизводственного объекта
        */
        NonIndustrialObjectInformationType3 = 13,

        /**
         * Сведения о составе проектной документации объекта непроизводственного назначения
        */
        NonIndustrialObjectInformationType4 = 14,

        /**
         * Сведения климатические, топливные, энергетические
        */
        NonIndustrialObjectInformationType5 = 15,
    }

export enum ObjectPartsType {
    ComplexPart,
    OKS
}

/**
 * Перечень типов организаций
*/
export enum OrgType {
    Organization = 1,   // Юридическое лицо
    ForeignOrganization = 2,    // Иностранное юридическое лицо (представительство, филиал)
    IP = 3,    // Индивидуальный предприниматель
    Person = 4    // Физическое лицо
}

export enum TimeRange {
    None = 0,
    Year = 1,
    ThreeMonth = 2,
    NineTyDays = 3,
}


export enum SchemeCSOObjectDataStatus {
    // Отправлен исполнителем
    SchemeSCOODSentByExecutor = 1,
    // В работе
    SchemeSCOODInWorks = 2,
    // Принят в архив
    SchemeSCOODAcceptedInArch = 3,
    // Аннулировано
    SchemeSCOODCanceled = 4,
}

export enum SectionalSpecialization {
    NONE = 0,
    // ОМНТ
    OMNT = 1,
    // ТЭЛП
    TELP = 2,
    // ГТСС
    GTSS = 3,
    // ДУП
    DUP = 4,
}

export enum SubjectChLRowType {
    // Нету
    None = 0,
    // Информация с чек-листа проекта
    ProjectCheckListInfo = 1,
    // Информация с групповых документов
    SectionsInfo = 2
}

export enum SubjectChLNodeType {
    // Нету
    None = 0,
    // Да
    Yes = 1,
    // Нет
    No = 2,
    // Не требуется
    NotRequired = 3,
}

export enum CheckListTempNodeType {
    // Тип узла: Папка
    Folder = 0,
    // Тип узла: Документ
    Document = 1,
}

export enum AgreementTemplateTypeEnum {
    //Документ
    Document = 0,
    //Чек-лист
    CheckList = 1,
}

export enum SubjectChLInfoRowType {
    // Нету
    None = 0,
    // Вероятность возникновения риска
    ProbabilityOfRisk = 1,
    // Тяжесть последствий
    RiskProbabilityCriterion = 2,
    // Итоговое значение риска
    SummaryRiskValue = 3
}

export enum PositionQRCodeEnum {
    // Левый верхний угол
    LeftTopCorner = 0,
    // Правый верхний угол
    RightTopCorner = 1,
    // Правый нижний угол
    RightLowerCorner = 2,
    // Левый нижний угол
    LeftLowerCorner = 3
}

export enum SelectPagesPDFEnum {
    // На титульном листе
    TitlePage = 0,
    // На всех листах
    AllPages = 1
}

export enum ContextExecutionTypes {
    // один файл из файлового менеджера
    SingleFileFromFM = 0,
    ManyFilesFromFM = 1,
    UL = 2,
    Export = 3,
    Project = 4,
    TemplatesCS = 5,
}

export enum DeletedState {
    // Не удаленный или актуальный
    Off = 0,
    // Удаленный или неактуальный
    On = 1,
    // Составление
    Compilation = 2,
}

//Вид экспертизы
export enum EASUKPExpertiseForms {
    // Нет значения!
    None = 0,

    // Государственная экспертиза (Технической части и материалов изысканий)
    StateExpertise_TechnicalPart_SurveyMaterials = 1,

    // Государственная экспертиза (Техническая часть)
    StateExpertise_TechnicalPart = 2,

    // Государственная экспертиза (Инженерные изыскания)
    StateExpertise_EngineeringSurveys = 3,

    // Государственная экспертиза (Сметная часть)

    StateExpertise_EstimatePart = 4,

    // Государственная историко-культурная
    StateExpertise_Historical_Cultural = 7,

    // Государственная экологическая
    StateExpertise_Environmental = 8,

    // Государственная экспертиза (Сводное)
    StateExpertise_Consolidated = 10,

    // Государственная экспертиза (Сопровождение в рамках ПИР)
    StateExpertise_Support_PIR = 11,

    // Государственная экспертиза (Сопровождение в рамках СМР)
    StateExpertise_Support_SMR = 12,
}

// Тип экспертизы
export enum EASUKPExpertiseTypeSCONCLV {
    // Нет значения!
    None = 0,
    // Первичная
    Initial = 1,
    // Вторичная
    Secondary = 2,
}

// классификация групповых ролей из справочника
export enum GroupeRoleClassificationType {
    // Управляющий архивом
    ArchiveManager = 1,
    // ОВП
    OVP = 2,
    // Технический отдел
    Technical = 3,
    // Печать
    Print = 4
}

// перечисление для поля "Тип задания" в карточке создания задания ОВП
export enum OVPWorkTaskTypeTask {
    // ОВП
    OVP = 0,
    // Печать
    Print = 1,
}

export enum TransferMSGVEStatus {
    NOTPASSED = 'Не передано',
    PASSED = 'Передано',
}

export enum TFileType {
    FILES = 'Файлы',
    UL = 'ИУЛ'
}

export enum ObjectGraphSubdivisionPopupContext {
    CHOSENSUBDIVS = 'Выбранные подразделения',
    CHOOSESUBDIVS = 'Выбор подразделения'
}

export enum LogActionType {
    /**
     * Нет
    */
    none = 0,
    /**
     * Редактирование узла
    */
    EditObject = 1,
    /**
     * Выгрузка файла на редактирование
    */
    EditFile = 2,
    /**
     * Подписание ЭП
    */
    DSSSign = 3,
    /**
     * Выгрузка файла на просмотр
    */
    ViewFile = 4,
    /**
     * Вход в систему
    */
    CustomerLogon = 5,
    /**
     * Прием комплекта
    */
    CustomerAcceptComplect = 6,
    /**
     * Скачать файлы
    */
    CustomerDownloadFiles = 7,
    /**
     * Вход в систему
    */
    LogOn = 8,
    /**
     * Предварительный просмотр файла
    */
    CustomerPreviewFile = 9,
    /**
     * Создание запроса на субподряд
    */
    SubcontractorCreate = 10,
    /**
     * Доставка запроса на субподряд
    */
    SubcontractorSend = 11,
    /**
     * Выполнение субподряда (в работе)
    */
    SubcontractorInWork = 12,
    /**
     * Изменение данных у субподрядчика
    */
    SubcontractorChangeTypeTransfer = 13,
    /**
     * Изменение статуса экспертом ЦА
    */
    ChangeComplectStatus = 14,
    /**
     * Назначение/Изменение «Эксперта ЦА»
    */
    ChangeCheckPerson = 15,
    /**
     * Создание узла субподрядчиком
    */
    SubcontractorCreateObject = 16,
    /**
     * Редактирование узла субподрядчиком
    */
    SubcontractorEditObject = 17,
    /**
     * Удаление узла субподрядчиком
    */
    SubcontractorRemoveObject = 18,
    /**
     * Загрузка файла субподрядчиком
    */
    CreateSubcontractFile = 19,
    /**
     * Переименование файла субподрядчиком
    */
    RenameSubcontractFile = 20,
    /**
     * Удаление файла субподрядчиком
    */
    RemoveSubcontractFile = 21,
    /**
     * Изменение данных от субподрядчика
    */
    SubcontractorChangeTypeTransferForCustomer = 22,
    /**
     * Изменение статуса генпроектировщиком
    */
    SubcontractorOwnerChangeStatus = 23,
    /**
     * Изменение статуса субподрядчиком
    */
    SubcontractorExecuterChangeStatus = 24,
    /**
     * Отмена субподряда по этапу
    */
    CancelSubcontractorTaskByStageCP = 25,
    /**
     * Экспорт САПР-контейнеров
    */
    ExportSAPRContainer = 26,
    /**
     * Экспорт группы файлов
    */
    ExportGroupFiles = 27,
    /**
     * Удаление узла (пометка на удаление)
    */
    MarkRemovedObject = 32,
    /**
     * Файлы в томе сформированы
    */
    FilesInTomeFormed = 48,
    /**
     * Файлы в томе сформированы и подписаны
    */
    FilesInTomeFormedAndSigned = 49,
    /**
     * Уведомить ГИПа о готовности тома
    */
    NotifyGIPIsTomeReady = 55,
    /**
     * Удаление файла в корзину
    */
    RemoveFile = 64,
    /**
     * Удаление файла из корзины
    */
    RemoveFileFromRecycle = 128,
    /**
     * Удаление файла в САПР-контейнере
    */
    ShareContainerRemoveFile = 130,
    /**
     * Удаление каталога в САПР-контейнере
    */
    ShareContainerRemoveDirectory = 131,
    /**
     * Удаление узла полностью
    */
    RemoveObject = 256,
    /**
     * Создание узла
    */
    CreateObject = 512,
    /**
     * Создан архивный проект
    */
    CreateArchivePproject = 600,
    /**
     * Передан в архив
    */
    ProjectTransferredToArchive = 700,
    /**
     * Возвращен из архива
    */
    ProjectReturnedFromArchive = 701,
    /**
     * Загрузка файла
    */
    UploadFile = 1024,
    /**
     * Создание файла в САПР-контейнере
    */
    ShareContainerCreateFile = 1030,
    /**
     * Создание каталога в САПР-контейнере
    */
    ShareContainerCreateDirectory = 1031,
    /**
     * Переименование файла
    */
    RenameFile = 4096,
    /**
     * Переименование файла в САПР-контейнере
    */
    ShareContainerRenameFile = 4100,
    /**
     * Переименование каталога в САПР-контейнере
    */
    ShareContainerRenameDirectory = 4101,
    /**
     * Сохранение файла в САПР-контейнере
    */
    ShareContainerChangeFile = 4102,
    /**
     * Перемещение файла в узле
    */
    ChangeFolderFile = 8192,
    /**
     * Перемещение файла между узлами
    */
    ChangeParentFile = 16384,
    /**
     * Возвращение файла в базу после редактирования
    */
    UploadEditedFile = 32768,
    /**
     * Отмена редактирования файла
    */
    CancelEditingFile = 65536,
    /**
     * Восстановление файла из резервных копий
    */
    RestoreBackupFile = 131072,
    /**
     * Изменение сведений о файле
    */
    EditFileInfo = 262144,
    /**
     * Создание рабочего задания
    */
    CreateWorkTask = 262145,
    /**
     * Редактирование рабочего задания
    */
    EditWorkTask = 262146,
    /**
     * Изменен статус производственного задания
    */
    ChangeProductionWorkTaskStatus = 262170,
    /**
     * Изменен статус задания согласования документа
    */
    ChangeAgreementWorkTaskStatus = 262230,
    /**
     * Установлен новый статус комплекта
    */
    ChangeTransferringPSDStatusForComplect = 262300,
    /**
     * Обновлен статус передачи бумажной документации
    */
    RequestForPaperVersionChangeStaticStatus = 262370,
    /**
     * Выбор томов
    */
    ChooseTome = 262400,
    /**
     * Изменение статуса задания генпроектировщиком
    */
    SubcontractorOwnerChangeNewSubcontractWorkTaskStatus = 263000,
    /**
     * Изменение статуса задания субподрядчиком
    */
    SubcontractorExecuterChangeNewSubcontractWorkTaskStatus = 263001,
    /**
     * Отмена субподрядного задания
    */
    CancelNewSubcontractWorkTask = 263002,
    /**
     * Установлена связь по субподрядному заданию
    */
    NewSubcontractWorkTaskInWork = 263003,
    /**
     * Отправлен запрос субподрядного задания
    */
    SentNewSubcontractWorkTask = 263004,
    /**
     * Доп.файлы к заданию
    */
    AddingFilesForSubcontract = 263005,
    /**
     * Выполнена команда "Передать" без смены статуса
    */
    TransferNewSubcontractWorkTaskWithoutChangeStatus = 263006,
    /**
     * Назначение референта
    */
    AddReferent = 524288,
    /**
     * Назначение референта персонального задания
    */
    AddReferentForWorkTask = 524291,
    /**
     * Добавление пользователей в Групповую роль
    */
    AddPersonsToGroupRole = 524300,
    /**
     * Добавление пользователей в Типовую роль
    */
    AddPersonsToTypicalRole = 524301,
    /**
     * Удаление референта
    */
    RemoveReferent = 1048576,
    /**
     * Удаление референта персонального задания
    */
    RemoveReferentForWorkTask = 1048579,
    /**
     * Удаление пользователей из Групповой роли
    */
    RemovePersonsFromGroupRole = 1048589,
    /**
     * Удаление пользователей из Типовой роли
    */
    RemovePersonsFromTypicalRole = 1048590,
    /**
     * Экспорт файлов
    */
    ExportFiles = 2097152,
    /**
     * Изменение прав доступа
    */
    EditPermissions = 4194304,
    /**
     * Изменение у пользователя групповых ролей на узел
    */
    EditGroupRoleUserOnNode = 8388608,
    /**
     * Смена статуса
    */
    ChangeStatus = 16777216,
    /**
     * Отмена изменения статуса
    */
    RollBackStatus = 33554432,
    /**
     * Назначен специалист для согласования документа/Необходимость согласования ПСД
    */
    AllPersonsStatusWasAppointed = 33554500,
    /**
     * Процесс согласования документа завершен
    */
    CompletedAgreementWorkTask = 33554501,
    /**
     * Отмена согласования документа
    */
    CanceledAgreementWorkTask = 33554502,
    /**
     * Согласование документа прервано
    */
    InterruptedAgreementWorkTask = 33554503,
    /**
     * Запуск процесса согласования ПСД
    */
    RunAgreementProcess = 33554504,
    /**
     * Назначен специалист для согласования тома РВИ/Необходимость согласования тома РВИ ПСД (архив 2.0)
    */
    TomeRVIAllPersonsStatusWasAppointed = 33554511,
    /**
     * Процесс согласования тома РВИ завершен (архив 2.0)
    */
    TomeRVICompletedAgreementWorkTask = 33554512,
    /**
     * Отмена согласования тома РВИ (архив 2.0)
    */
    TomeRVICanceledAgreementWorkTask = 33554513,
    /**
     * Согласование тома РВИ прервано (архив 2.0)
    */
    TomeRVIInterruptedAgreementWorkTask = 33554514,
    /**
     * Запуск процесса согласования ПСД тома РВИ (архив 2.0)
    */
    TomeRVIRunAgreementProcess = 33554515,
    /**
     * Назначение ГИПа у субподрядного задания
    */
    SetGIPNewSubcontractWorkTask = 33600000,
    /**
     * Смена ГИП у субподрядного задания
    */
    ChangeGIPNewSubcontractWorkTask = 33600001,
    /**
     * Смена ГИП на проекте
    */
    ChangeGIPforProject = 33600200,
    /**
     * Изменение статуса в задании ОВП
    */
    ChangeStatusOVPWorkTask = 33700000,
    /**
     * Изменение статуса задания доступа к архиву
    */
    ChangeStatusAccessToCSOWorkTask = 33700500,
    /**
     * Изменение статуса задания архивирования
    */
    ChangeStatusCSOWorkTask = 33700700,
    /**
     * Изменение статуса документа
    */
    ChangeStatusDocument = 33701000,
    /**
     * Изменение настройки уведомления
    */
    ChangeNotificationSettings = 33702000,
    /**
     * Изменение настройки профиля
    */
    ChangeProfileSettings = 33702001,
    /**
     * Проверка целостности файлов
    */
    ArchiveFileCheckHashValid = 33705000,
    /**
     * Заявка ВЭ получена успешно
    */
    ASUKSClaimsVERequestReceivedSuccessfully = 33706000,
    /**
     * Заявка ВЭ не получена - ошибка
    */
    ASUKSClaimsVERequestReceivedFailure = 33706001,
    /**
     * Получено новое замечание по ВЭ
    */
    ASUKSClaimsVENewResultRemark = 33706002,
    /**
     * Изменение статуса экспертизы ВЭ
    */
    ASUKSClaimsVEChangeStatus = 33706003,
    /**
     * Блокировка узла
    */
    BlockedNode = 67108864,
    /**
     * Ошибка обновления АС ФС
    */
    ErrorAsfsAccess = 67108865,
    /**
     * Успешное обновление АС ФС
    */
    SuccessAsfsAccess = 67108866,
    /**
     * Разблокировка узла
    */
    UnblockedNode = 134217728,
    /**
     * Удаление статуса
    */
    DeleteStatus = 268435456,
    /**
     * Восстановление статуса
    */
    UndeleteStatus = 536870912,
    /**
     * Успешное обновление ЕАСУКП
    */
    EASUKPUpdateSuccess = 1073741824,
    /**
     * Ошибка обновления ЕАСУКП
    */
    EASUKPUpdateError = -2147483648,
    /**
     * Выход из системы
    */
    LogOut = 99999999,

    /**
     * Необходимость согласования чек-листа
     */
    NecessityToCoordinateChecklist = 33900000,

    /**
     * Процесс согласования чек-листа завершен
     */
    ChecklistCompletedAgreementWorkTask = 33900001,

    /**
     * Отмена согласования чек-листа
     */
    ChecklistCancelledAgreementWorkTask = 33900002,

    /**
     * Согласование чек-листа прервано
     */
    ChecklistInterruptedAgreementWorkTask = 33900003,

    /**
     * Запуск процесса согласования чек-листа
     */
    ChecklistStartedAgreementWorkTask = 33900004,

    /**
     * Изменение статуса графика ОГ
     */
    EditStatusObjectGraphs = 68000000,

    /**
     * Отказ в приемке по работам в ОГ
     */
    RejectAcceptanceWorkObjectGraphs = 68000001,

    /**
     * Срок сорван по работам ОГ
     */
    MissedDeadlineWorkObjectGraphs = 68000002,

    /**
     * Регламентные сроки по ОГ
     */
    RegulationDeadlineWorkObjectGraphs = 68000003,
    /**
     * Необходимость согласования ОГ
     */
    ObjectGraphsAgreementNecessity = 69000000,
    /**
     * Процесс согласования ОГ завершен
     */
    ObjectGraphsAgreementCompleted = 69000001,
    /**
     * Отмена согласования ОГ
     */
    ObjectGraphsAgreementCanceled = 69000002,
    /**
     * Согласование ОГ прервано
     */
    ObjectGraphsAgreementInterrupted = 69000003,
    /**
     * Запуск процесса согласования ОГ
     */
    ObjectGraphsAgreementStart = 69000004,

    /**
     * Запуск согласования КГ
     */
    CalendarScheduleAgreementStart = 70000000,
    /**
     * Необходимость согласования КГ
     */
    CalendarScheduleAgreementNecessity = 70000001,
    /**
     * КГ утвержден
     */
    CalendarScheduleAgreementApproved = 70000002,
    /**
     * КГ не утвержден
     */
    CalendarScheduleAgreementUnapproved = 70000003,
    /**
     * Согласование КГ отменено
     */
    CalendarScheduleAgreementCanceled = 70000004,
    /**
     * Изменение статуса в задание ТЗ
     */
    CSJobTicketWorkTaskChangeStatus = 71000000,
    /**
     * ТЗ утверждено
     */
    CSJobTicketWorkTaskApproved = 71000001,
    /**
     * ТЗ выполнено
     */
    CSJobTicketWorkTaskCompleted = 71000002,
    /**
     * Подтверждено выполнение ТЗ
     */
    CSJobTicketWorkTaskCompletionConfirmed = 71000003,
    /**
     * Выполнение ТЗ не подтверждено
     */
    CSJobTicketWorkTaskCompletionUnconfirmed = 71000004,
    /**
     * Не назначен ответственный ТЗ
     */
    CSJobTicketWorkTaskResponsiblePersonUnassigned = 71000005,
    /**
     * Изменение плановых сроков ТЗ
     */
    CSJobTicketWorkTaskChangePlannedDeadlines = 71000006,
    /**
     * Плановый срок завершения работ по ТЗ превышен
     */
    CSJobTicketWorkTaskDeadlinesExceeded = 71000007,
    /**
     * Директивная выдача ТЗ
     */
    CSJobTicketWorkTaskDeadlinesExceededDirectiveRelease = 71000008,
    /**
     * Изменение статуса в задание вехи
     */
    CSVehaWorkTaskChangeStatus = 72000000,
    /**
     * Подтверждено выполнение вехи
     */
    CSVehaWorkTaskCompletionConfirmed = 72000001,
    /**
     * Выполнение вехи не подтверждено
     */
    CSVehaWorkTaskCompletionUnconfirmed = 72000002,
    /**
     * Истек плановый срок завершения работ по заданию веха
     */
    CSVehaWorkTaskCompletionDeadlinesExpired = 72000003,
}

    export enum OGStatuses {
        /** Составление */
        Compilation = 1,
        /** Создан */
        Created = 2,
        /** В работе */
        InWork = 3,
        /** Приостановлен */
        Suspended = 4,
        /** На корректировке */
        OnAdjustment = 5,
        /** Завершен */
        Done = 6,
    }

    /**
     * Типы ячеек строки графика объекта
     */
    export enum ObjectGraphsRowCellTypeEnum {
        /**
         * «П» - это значение о получении результатов работы
         */
        Letter_P = 0,
        /**
         * «В» - это значение о выдачи результата работы, в ячейке которой оно установлено
         */
        Letter_V = 1,

        /**
         * П (зеленая)
         */
        Letter_P_Green = 2,
        /**
         * В (зеленая)
         */
        Letter_V_Green = 3,

        /**
         * П (желтая) (отказ в приемке)
         */
        Letter_P_Yellow = 4,
        /**
         * В (желтая)
         */
        Letter_V_Yellow = 5,

        /**
         * П (красная)
         */
        Letter_P_Red = 6,
        /**
         * В (красная) (срыв срока)
         */
        Letter_V_Red = 7,

        /**
         * Undefined
         */
        Letter_Undefined = 999,
    }

    export enum CalendarScheduleTemplateStatus {
        // Актуален
        ACTUAL = 0,
        // Составление
        COMPILATION = 1,
        // Отменен
        CANCELED = 2,
    }

    /**
     * Статусы в заданиях ТЗ по новому календарному графику
     */
    export enum CSJobTicketWTStatuses {
        /**
         * Составление
         */
        COMPILATION = 170,
        /**
         * Выдано
         */
        ISSUED = 171,
        /**
         * Принято
         */
        ACCEPTEDEXECUTOR = 172,
        /**
         * Не принято
         */
        NOTACCEPTEDEXECUTOR = 173,
        /**
         * В работе
         */
        INWORK = 174,
        /**
         * Выполнено
         */
        DONE = 175,
        /**
         * Подтверждено выполнение
         */
        DONECONFIRMED = 176,
        /**
         * Выполнение не подтверждено
         */
        DONENOTCONFIRMED = 177,
        /**
         * Отменено
         */
        CANCELED = 178
    }

    /**
     * Статусы в заданиях Веха по новому календарному графику
     */
    export enum CSVehaWTStatuses {
        /**
         * Составление
         */
        COMPILATION = 180,
        /**
         * Выдано
         */
        ISSUED = 181,
        /**
         * Принято
         */
        ACCEPTEDEXECUTOR = 182,
        /**
         * Не принято
         */
        NOTACCEPTEDEXECUTOR = 183,
        /**
         * В работе
         */
        INWORK = 184,
        /**
         * Выполнено
         */
        DONE = 185,
        /**
         * Подтверждено выполнение
         */
        DONECONFIRMED = 186,
        /**
         * Выполнение не подтверждено
         */
        DONENOTCONFIRMED = 187,
        /**
         * Отменено
         */
        CANCELED = 188
    }

    export const ClassificationTypes = [
        {
            Id: 1,
            Name: 'УА'
        },
        {
            Id: 2,
            Name: 'ОВП'
        },
        {
            Id: 3,
            Name: 'ТО'
        },
        {
            Id: 4,
            Name: 'Печать'
        },
        {
            Id: 5,
            Name: 'ОГ'
        },
        {
            Id: 6,
            Name: 'РСП'
        },
        {
            Id: 7,
            Name: 'ГИП'
        },
        {
            Id: 8,
            Name: 'ДЗП'
        },
        {
            Id: 9,
            Name: 'ГИ'
        },
    ]

    export enum CSAgreementStatuses {
        INWORK = 190,
        CANCELED = 191,
        DONE = 192,
    }

    export enum CSAgreementAccordionIDs {
        CURRENT_APPROVAL_PROCESS = 0,
        LAST_REJECTED_APPROVAL = 1,
        PREVIOUSLY_REJECTED_APPROVAL = 2,
    }

    export enum TypeReportDivisionLoadingPlan {
        /**
         * Без фильтров
         */
        WITHOUTFILTERS = 0,
        /**
         * Задания с просрочкой
         */
        OVERDUEWORKTASK = 1,
        /**
         * Задания со сроком исполнения в ближайшие три дня
         */
        NEXTTHREEDAYS = 2,
    }

    export enum CSLevelTypeEnum {
        /// Календарный график Уровень 1 - CalendarScheduleStage
        CSSTAGE = 0,
        /// Календарный график Уровень 2 - CalendarScheduleContiguousIssue
        CSCONTIGUOUSISSUE = 1,
    }

    export enum DatesColorIndication {
        /**
         * Белый
         */
        NONE = 0,
        /**
         * Приближение окончания срока(плановый и/или дата выдачи задания/срок выполнения) (Оранжевый)
         */
        APPROACHINGDEADLINE = 1,
        /**
         * Нарушение(срыв) срока(плановый и/или дата выдачи задания/срок выполнения) (Красный)
         */
        MISSEDDEADLINE = 2,
    }
}
