function Card(props) {
    const { title, backgroundColor, children } = props;

    return (
        <div
            style={{
                margin: 8,
                padding: 8,
                borderRadius: 8,
                boxShadow: "0px 0px 4px grey",
                backgroundColor: backgroundColor || "white", //logical or 연산(내가 만든 컴포넌트의 기본값을 주고싶을때 사용)
            }}
        >
            {title && <h1>{title}</h1>}
            {children}
        </div>
    );
}

export default Card;