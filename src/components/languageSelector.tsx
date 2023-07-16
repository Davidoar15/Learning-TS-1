import { type FC } from "react"; // FC = FunctionComponent
import { Form } from "react-bootstrap";
import { SUPPORTED_LANGUAGES } from "../const";
import { FromLanguage, Language } from "../types";

// interface Props {
//     onChange: (language: Language) => void
// }

type Props = 
    |   { type: "from", value: FromLanguage, onChange: (language: FromLanguage) => void }
    |   { type: "to", value: Language, onChange: (language: Language) => void }

export const LanguageSelector: FC<Props> = ({ onChange }) => {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value as Language)
    }

    return (
        <Form.Select aria-label="Select Language" onChange={handleChange}>
            {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
                <option key={key} value={key}>
                    {literal}
                </option>
            ))}
        </Form.Select>
    )
}