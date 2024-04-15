import UIContainer from "../containers/UIContainer";

export default function Footer() {
    return (
        <UIContainer>
            <p>
                Created by{" "}
                <a
                    href="https://github.com/lokiaus/"
                    className="hover:underline"
                >
                    lokiaus
                </a>
                .
            </p>
        </UIContainer>
    );
}
