
import { Vue, Component, Prop } from 'av-ts'



@Component
export default class DateField extends Vue {

    @Prop
    value: Date;
    @Prop
    disable: boolean;

    onChange(e: any) {
        this.$emit('change', e.target.value)//Need to conevert to date
    }
}