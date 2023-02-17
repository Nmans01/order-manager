export default function ButtonHeader (props) {
    return (
        <div class="flex flex-row justify-between">
            {props.children}
        </div>
    );
}