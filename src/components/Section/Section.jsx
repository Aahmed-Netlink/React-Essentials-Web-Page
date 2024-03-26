const Section = ({title, children, ...props}) => {
    return <section {...props}>
        <>
            <h2>{title}</h2>
            {console.log(title)}
            {children}
        </>
    </section>
}

export default Section;