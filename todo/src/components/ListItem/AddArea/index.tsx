
import * as C from './styles';

export const AddArea = () => {
    const [inputText, setInputtext] = useState('');

    return (
        <C.Container>
            <div className="image">+</div>
            <input
                type="text"
                placeholder="Adicione uma terefa"
            />
        </C.Container>
    );
}