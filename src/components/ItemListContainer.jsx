function ItemListContainer(props){
    return(
        <div style={{ padding:'40px'}}>
            <hr style={{ width:'100%', padding:'40px'}}></hr>
            {props.greeting}
            <br></br>
        </div>
    )
}

export default ItemListContainer;