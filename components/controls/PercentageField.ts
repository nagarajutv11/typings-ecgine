
import { Vue, Component, Prop } from 'av-ts'
import LocalFormats from '../LocalFormats';



@Component
export default class PercentageField extends Vue {
    @Prop
    value: number;
    @Prop
    value2: Input;
    @Prop
    disable: boolean;

    onChange(e: any) {
        this.$emit('change', parseFloat(e.target.value) / 100)
    }
}

class Input {

    localFormats: LocalFormats;

}