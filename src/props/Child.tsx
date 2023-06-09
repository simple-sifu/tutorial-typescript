interface ChildProps {
    color: string;
    onClick: () => void;
    children?: React.ReactNode;
}

// typescript doesnt know this is a React Component
// This component can not handle children nodes !!!
export const Child = ({color, onClick}: ChildProps) => {
    return (
        <div>
            {color}
            <button onClick={onClick}/>
        </div>

    )

}

// typescript knows this is a React Component and can have 4 React component properties 
export const ChildFC: React.FC<ChildProps> = (({color, onClick, children}) => {
    return (
        <div>
            {color}
            {children}
            <button onClick = {onClick} />
        </div>
    );
})

// ChildFC.displayName




// In the upcoming lecture, we will be making use of the children prop in our Child and ChildAsFC components. You will eventually run into the following error:

// TS2339: Property 'children' does not exist on type 'ChildProps'.

// React 18 introduces a breaking change with the removal of implicit children in React.FunctionComponent types.

// To fix this, we now must include the children in the interface along with our other props:


interface ChildProps {
    color: string;
    onClick: () => void;
    children?: React.ReactNode;
  }

