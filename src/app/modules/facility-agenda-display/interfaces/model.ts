export interface IUserLoginResponse{
    meta: {
      token:string
    }
  }
  
  export interface IFacilityItemList{
    data: [IFacilityItem]
  }
  
  export interface IFacilityItem{
    attributes: {
      startTime: string;
      endTime: string;
      assetDescription: string
    },
    id: number,
  }
  export interface ISidebarFacilityData{
    data:[
      {
        attributes: {
          facilityCategory: string;
          facilityCategoryId: number;
          name: string
        },
        id: number;
        links: {
          related: string;
        };
        relationship: {
      
        } 
      }
    ]
      
  }
  
  export interface IrenderFacilityItem{
    attributes: {
      facilityCategory: string;
      facilityCategoryId: number;
      name: string
    },
    id: number;
    links: {
      related: string;
    };
    relationship: {
    } 
  }
  
  export interface IRenderMenuType {
    name: string;
    iconType: "BUILDING" | "PLACE";
    active: boolean;
    submenu: SubMenu[];
  }
  
  export interface SubMenu {
    name: string;
    url: string
  }