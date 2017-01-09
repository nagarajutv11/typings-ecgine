
import { Vue, Component, Prop } from 'av-ts'



@Component
export default class TextAreaField extends Vue {
    @Prop
    value: string;
    @Prop
    disable: boolean;

    onChange(e: any) {
        this.$emit('change', e.target.value)
    }
}