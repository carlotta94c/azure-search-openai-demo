import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Come sono distribuite geograficamente le sedi di Contoso nel mondo?",
        value: "Come sono distribuite geograficamente le sedi di Contoso nel mondo?"
    },
    { text: "Come funziona la sua architettura di rete?", value: "Come funziona la sua architettura di rete?" },
    { text: "Come si occupa della protezione dei dati?", value: "Come si occupa della protezione dei dati?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
