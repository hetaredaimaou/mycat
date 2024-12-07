"use client";

type Props = {
	onClick: () => void,
	label: string
	buttonColor: string,
}
export const Button = ({ onClick, label, buttonColor }: Props) => {
	return (
		<button
			style={{ backgroundColor: buttonColor, width: 350, height: 100 }}
			onClick={() => onClick}
		>
			{label}
		</button>
	)
};
