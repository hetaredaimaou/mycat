type Props = {
	// TODO: 型を考えてね
	hoge: string;
};

export const Button = ({ props }: Props) => {
	return <button>{"ボタンの中に入る文章"}</button>;
};

/**
 * 使用する際は以下のように使う想定
 * <Button onClick={() => console.log('ログインの処理')} text="ボタンの中の文字" />
 *  />
 */
