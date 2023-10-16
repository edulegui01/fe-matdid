import { MENU_URLS } from "../components/navbar/routes"



export class subMenu{


    static menuListAcciones:Array<any>=[
       
        {nombre:'COMPRAS',menus:[],icono:'shopping_cart'},
        {nombre:'VENTAS',menus:[],icono:'point_of_sale'},
        {nombre:'CAJA',menus:[],icono:'monetization_on'},
        {nombre:'INVENTARIO',menus:[],icono:'assignment', url:MENU_URLS.LOCALIDAD.URL_BASE}
    ]

    static menuListAdministracion:Array<any>=[
        {nombre:'CLIENTES',menus:[],icono:'groups',url:MENU_URLS.CLIENTE.URL_BASE},
        {nombre:'PROVEEDORES',menus:[],icono:'local_shipping',url:MENU_URLS.PROVEEDOR.URL_BASE},
        {nombre:'FUNCIONARIOS',menus:[],icono:'contacts',url:MENU_URLS.FUNCIONARIO.URL_BASE},
        {nombre:'PRODUCTOS',menus:[],icono:'inventory', url:MENU_URLS.PRODUCTO.URL_BASE},
        {nombre:'LOCALIDADES',menus:[],icono:'location_on', url:MENU_URLS.LOCALIDAD.URL_BASE},
    ]

   


}