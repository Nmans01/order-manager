export default function ButtonBar(props) {
    return (
        <div class="flex flex-row gap-3">
            {props.children}
        </div>
    );
}