type CounterButtonProps = {
    step?: number;
    onAction?: (val: number, dir: 'incr'|'desc') => void
}

// Utilisation de Noop (No operation), qui se symbolise par une fonction vide : () => {} 
export default function CounterButton({ step = 1, onAction = () => {}} : CounterButtonProps) {

    return (
        <div>   
            <button onClick={() => onAction(step, 'incr')}>+ {step}</button>
            <button onClick={() => onAction(step, 'desc')}>- {step}</button>
        </div>
    )
}