interface ChildProps {
    color: string;
}

export const Child = ({color}: ChildProps) => {
    return <div>{color}</div>
}

export const ChildFC: React.FC<ChildProps> = (({color}) => {
    return <div>{color}</div>;
})