const List = ({
	items,
	resourceName,
	itemComponent: ItemComponent,
}) => {
	return (
		<>
			{items.map((item) => (
				<ItemComponent key={item.id} {...{ [resourceName]: item }} />
			))}
		</>
	)
}

export default List;