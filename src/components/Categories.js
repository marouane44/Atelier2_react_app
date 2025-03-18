function Categories({ selectedCategory, setSelectedCategory }) {
    const categories = ['all', 'necklace', 'bracelet', 'ring'];

    return (
        <div>
            <label>Filtrer par catégorie: </label>
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                {categories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Categories;
