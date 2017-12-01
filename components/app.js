import { Kefir, component } from 'brookjs';

export default component({
    onMount() {
        return Kefir.constant({type: 'MOUNT_APP'})
    }
});