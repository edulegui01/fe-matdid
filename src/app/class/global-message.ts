/**
 * Clase con datos estaticos de uso global,
 * por lo general texto que se muestra al usuario.
 */

 export class GlobalMessage {

    static APP_LABELS = {
        APP_NAME: 'Proyecto Base',
        APP_NAME_SMALL: '',
        APP_VERSION: 'Versión: ',
    };

    static AUTH_METHODS = [
        { value: 'TABLA', text: 'TABLA' },
        { value: 'ACTIVE_DIRECTORY', text: 'ACTIVE DIRECTORY' }
    ];

    static ACCOUNT_STATUS = [
        { value: '', text: 'TODOS' },
        { value: true, text: 'ACTIVO' },
        { value: false, text: 'INACTIVO' }
    ];

    static TIPO_ORDEN =  [
        { value: 'OS' }, 
        { value: 'OC' }
    ]

    static GENERIC_SUCCESS_MSG = {
        SUCCESS_CREATED: 'CREACION EXITOSA',
        SUCCESS_UPDATED: 'ACTUALIZACION EXITOSA',
        SUCCESS_DELETED: 'ELIMINACION EXITOSA',
    };

    static GENERIC_ERROR_MSG = {
        PERMISSION_DENIED: 'PERMISOS INSUFICIENTES'
    };

    static PAGINATOR_RANGE = [10, 25, 50];
    static PAGINATOR_RANGE1 = [10, 25, 50];
    

    static VIEW_LABELS = {
        ACCEPT: 'ACEPTAR',
        CANCEL: 'CANCELAR',
        CREATE: 'CREAR',
        REGISTER: 'REGISTRAR',
        SAVE: 'GUARDAR',
        UPDATE: 'ACTUALIZAR',
        CHANGE: 'CAMBIAR',
        CONFIRM: 'CONFIRMAR',
        EDIT: 'EDITAR',
        ADD: 'AGREGAR',
        CLEAR: 'LIMPIAR',
        CLEAR_FORM: 'LIMPIAR FORMULARIO',
        MODIFY: 'MODIFICAR',
        EXIT: 'SALIR',
        CLOSE: 'CERRAR',
        RETURN: 'VOLVER',
        ACTIVE: 'ACTIVO',
        INACTIVE: 'INACTIVO',
        ACTIVATED: 'ACTIVAR',
        DEACTIVATED: 'DESACTIVAR',
        CHANGE_PASS: 'CAMBIAR CONTRASEÑA',
        CHANGE_MANAGEMENT: 'CAMBIAR GESTIÓN',
        CHANGE_ADMIN: 'CAMBIAR ADMINISTRACIÓN',
        ASOCIAR_OBJ : 'ES OBLIGATORIO ASOCIAR EL GRUPO Y EL SUB-GRUPO',
        EXIS_OBJ : 'NO SE PUEDE ELIMINAR YA QUE EXISTEN REGISTROS ASOCIADOS',
        // LOCK_FIELD: 'BLOQUEAR CAMPO: MANTIENE EL USO DEL VALOR SELECCIONADO DURANTE EL USO DEL FORMULARIO',
        // UNLOCK_FIELD: 'DESBLOQUEAR CAMPO: PERMITE LA SELECCIÓN PERSONALIZADA DURANTE CADA CARGA DEL FORMULARIO',

        // titulos de dialogs
        ATTENTION: 'ATENCION',
        IMPORTANT_INFO: 'INFORMACION IMPORTANTE',
        INVALID_FORM: 'FORMULARIO INVALIDO',

        // inicio de mensaje de confirmacion generico
        CONFIRM_CREATE: '¿CONFIRMA QUE DESEA REGISTRAR ',
        CONFIRM_SAVE: '¿CONFIRMA QUE DESEA GUARDAR ',
        CONFIRM_MIGRATE: '¿CONFIRMA QUE DESEA MIGRAR ?',
        CONFIRM_MODIFY: '¿CONFIRMA QUE DESEA MODIFICAR ?',
        CONFIRM_EDIT: '¿CONFIRMA QUE DESEA APLICAR LOS CAMBIOS PARA ',
        CONFIRM_REMOVE: '¿DESEA REMOVER DE LA LISTA ',
        CONFIRM_UPDATE_PASSWORD: `¿CONFIRMA QUE DESEA CAMBIAR SU CLAVE?.
            DEBERÁ INGRESAR AL SISTEMA CON SU NUEVA CLAVE LA PRÓXIMA VEZ QUE INICIO SESIÓN.`,
        CONFIRM_NEW_PASSOWORD_RECOVERY: `¿CONFIRMA QUE LA CLAVE INGRESADA SERA SU NUEVA CLAVE DE ACCESO?`,
        CONFIRM_NOTIFY: '¿CONFIRMA QUE DESEA NOTIFICAR ',
        CONFIRM_EXCLUDE: '¿CONFIRMA QUE DESEA EXCLUIR ',

        // operaciones
        SUCCESS_OPERATION: 'OPERACION EXITOSA',
        SUCCESS_REMOVE: 'ITEM REMOVIDO',

        //recovery
        RECOVERY_CONFIRM: '¿CONFIRMA QUE DESEA ENVIAR UN CORREO DE RECUPERACION PARA EL USUARIO ',
        RECOVERY_SUCCESS_MSG: `HEMOS ENVIADO UN CORREO A SU CUENTA, SIGA LOS
            PASOS DETALLADOS EN EL CORREO PARA RESTABLECER SU CLAVE.`,
        RECOVERY_INFO: `PARA RECUPERAR SU CUENTA DEBE INGRESAR SU ALIAS DE USUARIO,
            ESTAREMOS ENVIANDO UN LINK DE RECUPERACIÓN A SU CORREO ASOCIADO.`,
        RECOVERY_BTN: 'SOLICITAR RECUPERACION',
        SECURE_PASS_TITLE: 'RESTRICCIONES Y RECOMENDACIONES PARA UNA CLAVE SEGURA',
        SUCCESS_RECOVERY_CHANGE: 'CLAVE CAMBIADA, YA PUEDE INICIAR SESION CON SU NUEVA CLAVE.',
        RESTORE_PASSWORD_INFO: `INGRESE SU NUEVA CLAVE PARA CULMINAR EL PROCESO DE CREACION/RESTAURACION DE CLAVE,
         ESTE ENLACE ES DE UN SOLO USO.`,
        CHANGE_CURRENT_PASS: `ASEGURESE DE CREAR UNA CONTRASE FUERTE.`,
        INVALID_RECOVERY_TOKEN_MSG: `NO SE REGISTRO RECUPERACION DE CLAVE PARA EL ENLACE ACTUAL, EN ENLACE ES INVALIDO O HA EXPIRADO`,
        SECURE_PASS: {
            title: 'LOS ITEMS DEL LISTADO MARCADOS CON ASTERISCO (*) SON OBLIGATORIOS',
            list: [
                { required: true, value: 'LONGITUD MINIMA 10 CARACTERES' },
                { required: true, value: 'DEBE CONTENER UNA O MAS LETRAS MINUSCULAS' },
                { required: true, value: 'DEBE CONTENER UNA O MAS LETRAS MAYUSCULAS' },
                { required: true, value: 'DEBE CONTENER UNO O MAS NUMEROS' },
                { required: true, value: 'DEBE CONTENER UNO O MAS DE LOS SIGUIENTES SIMBOLOS $@!%*?¿/~#.%^*()_-' },
                { required: true, value: 'SU NUEVA CLAVE DEBE SER DISTINTA A LAS ANTERIORES OCHO (8) CLAVES' },
                { required: false, value: 'EVITE QUE LA CLAVE TENGA SU NOMBRE, NOMBRE DE USUARIO O DATOS PERSONALES' },
                { required: false, value: 'EVITE QUE CONTENGA PALABRAS QUE PUEDAN APARECER EN UN DICCIONARIO' }
            ]
        },
        MIGRATE: 'MIGRAR',
        CONFIRM_CHANGE_AMINISTRATION: '¿CONFIRMA QUE DESEA CAMBIAR LA ADMINISTRACIÓN?, AL CAMBIAR LA ADMINISTRACIÓN VERÁ LOS CAMBIOS REFLEJADOS EN SU MENÚ LATERAL.',
        CONFIRM_CHANGE_MANAGEMENT: '¿CONFIRMA QUE DESEA CAMBIAR DE GESTIÓN?, PUEDE VER LA GESTIÓN ACTUAL BAJO SU NOMBRE EN LA BARRA DE TITULO PRINCIPAL.'
    };


    static ERROR_MSG = {
        title: 'PAGINA NO ENCONTRADA',
        msg: 'LA PAGINA A LA CUAL DESEA ACCEDER NO EXISTE O NO ESTA DISPONIBLE EN ESTE MOMENTO',
    };
    
}
