import { type FC } from "react"; // FC = FunctionComponent
import { Form } from "react-bootstrap";
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../const";
import { type FromLanguage, type Language, SectionType } from "../types.d";

// interface Props {
//     onChange: (language: Language) => void
// }

type Props = 
    |   { type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void }
    |   { type: SectionType.To, value: Language, onChange: (language: Language) => void }

export const LanguageSelector: FC<Props> = ({ onChange, type, value }) => {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value as Language)
    }

    return (
        <Form.Select aria-label="Select Language" onChange={handleChange} value={value}>
            {type === SectionType.From && <option value={AUTO_LANGUAGE}>Detect Language</option>}

            {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
                <option key={key} value={key}>
                    {literal}
                </option>
            ))}
        </Form.Select>
    )
}