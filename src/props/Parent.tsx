
import { ChildFC } from './Child';

const Parent = () => {
    return <ChildFC color={"red"} onClick={() => console.log("Clicked")}>
        {'Hello Children'}
    </ChildFC>
};

export default Parent