import { PropType } from "vue";
export interface IWordCloudItem {
    name: string;
    value: string | number;
}
declare const _default: import("vue").DefineComponent<{
    data: {
        required: true;
        type: PropType<IWordCloudItem[]>;
    };
    color: {
        required: false;
        type: PropType<string[]>;
        default: () => string[];
    };
    speed: {
        required: false;
        type: NumberConstructor;
        default: number;
    };
    direction: {
        required: false;
        type: StringConstructor;
        default: string;
    };
}, {
    state: {
        width: number;
        height: number;
        contentEle: any;
        animateID: any;
        curIndex: number;
    };
    stop: () => void;
    start: (index: number) => void;
    wordClick: (item: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        required: true;
        type: PropType<IWordCloudItem[]>;
    };
    color: {
        required: false;
        type: PropType<string[]>;
        default: () => string[];
    };
    speed: {
        required: false;
        type: NumberConstructor;
        default: number;
    };
    direction: {
        required: false;
        type: StringConstructor;
        default: string;
    };
}>>, {
    color: string[];
    speed: number;
    direction: string;
}, {}>;
export default _default;
