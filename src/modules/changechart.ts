export const DASH = 'DASH';
export const EC = 'EC';
export const WC = 'WC';
export const CO2 = 'CO2';
export const HUMDEF = 'HUMDEF';
export const AIR = 'AIR';
export const SCR = 'SCR';
export const PIPE = 'PIPE';
export const IGLOB = 'IGLOB';
export const RADSUM = 'RADSUM';
export const TOUT = 'TOUT';

export interface Dash {
  type: typeof DASH;
}

export interface Ec {
  type: typeof EC;
}

export interface Wc {
  type: typeof WC;
}

export interface Co2 {
  type: typeof CO2;
}

export interface HumDef {
  type: typeof HUMDEF;
}

export interface Air {
  type: typeof AIR;
}

export interface Scr {
  type: typeof SCR;
}

export interface Pipe {
  type: typeof PIPE;
}

export interface Iglob {
  type: typeof IGLOB;
}

export interface RadSum {
  type: typeof RADSUM;
}

export type NavDispatchTypes =
  | Dash
  | Ec
  | Wc
  | Co2
  | HumDef
  | Air
  | Scr
  | Pipe
  | Iglob
  | RadSum;

export interface ChartI {
  isDash: boolean;
  isEc: boolean;
  isWc: boolean;
  isCo2: boolean;
  isHumDef: boolean;
  isAir: boolean;
  isScr: boolean;
  isPipe: boolean;
  isIglob: boolean;
  isRadSum: boolean;
}

const defaultChart: ChartI = {
  isDash: true,
  isEc: false,
  isWc: false,
  isCo2: false,
  isHumDef: false,
  isAir: false,
  isScr: false,
  isPipe: false,
  isIglob: false,
  isRadSum: false,
};

export const DashAction = (): Dash => {
  return {
    type: DASH,
  };
};

export const EcAction = (): Ec => {
  return {
    type: EC,
  };
};

export const WcAction = (): Wc => {
  return {
    type: WC,
  };
};

export const co2Action = (): Co2 => {
  return {
    type: CO2,
  };
};

export const humDefAction = (): HumDef => {
  return {
    type: HUMDEF,
  };
};

export const airAction = (): Air => {
  return {
    type: AIR,
  };
};

export const scrAction = (): Scr => {
  return {
    type: SCR,
  };
};

export const pipeAction = (): Pipe => {
  return {
    type: PIPE,
  };
};

export const iglobAction = (): Iglob => {
  return {
    type: IGLOB,
  };
};

export const radSumAction = (): RadSum => {
  return {
    type: RADSUM,
  };
};

export const changeChartReducer = (
  state: ChartI = defaultChart,
  action: NavDispatchTypes,
): ChartI => {
  switch (action.type) {
    case DASH:
      return {
        isDash: true,
        isEc: false,
        isWc: false,
        isCo2: false,
        isHumDef: false,
        isAir: false,
        isScr: false,
        isPipe: false,
        isIglob: false,
        isRadSum: false,
      };
    case EC:
      return {
        isDash: false,
        isEc: true,
        isWc: false,
        isCo2: false,
        isHumDef: false,
        isAir: false,
        isScr: false,
        isPipe: false,
        isIglob: false,
        isRadSum: false,
      };
    case WC:
      return {
        isDash: false,
        isEc: false,
        isWc: true,
        isCo2: false,
        isHumDef: false,
        isAir: false,
        isScr: false,
        isPipe: false,
        isIglob: false,
        isRadSum: false,
      };
    case CO2:
      return {
        isDash: false,
        isEc: false,
        isWc: false,
        isCo2: true,
        isHumDef: false,
        isAir: false,
        isScr: false,
        isPipe: false,
        isIglob: false,
        isRadSum: false,
      };
    case HUMDEF:
      return {
        isDash: false,
        isEc: false,
        isWc: false,
        isCo2: false,
        isHumDef: true,
        isAir: false,
        isScr: false,
        isPipe: false,
        isIglob: false,
        isRadSum: false,
      };
    case AIR:
      return {
        isDash: false,
        isEc: false,
        isWc: false,
        isCo2: false,
        isHumDef: false,
        isAir: true,
        isScr: false,
        isPipe: false,
        isIglob: false,
        isRadSum: false,
      };
    case SCR:
      return {
        isDash: false,
        isEc: false,
        isWc: false,
        isCo2: false,
        isHumDef: false,
        isAir: false,
        isScr: true,
        isPipe: false,
        isIglob: false,
        isRadSum: false,
      };
    case PIPE:
      return {
        isDash: false,
        isEc: false,
        isWc: false,
        isCo2: false,
        isHumDef: false,
        isAir: false,
        isScr: false,
        isPipe: true,
        isIglob: false,
        isRadSum: false,
      };
    case IGLOB:
      return {
        isDash: false,
        isEc: false,
        isWc: false,
        isCo2: false,
        isHumDef: false,
        isAir: false,
        isScr: false,
        isPipe: false,
        isIglob: true,
        isRadSum: false,
      };
    case RADSUM:
      return {
        isDash: false,
        isEc: false,
        isWc: false,
        isCo2: false,
        isHumDef: false,
        isAir: false,
        isScr: false,
        isPipe: false,
        isIglob: false,
        isRadSum: true,
      };
    default:
      return state;
  }
};
