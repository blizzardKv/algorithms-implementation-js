const breadthFirstSearch = (adj, v, t) => {
    // adj - смежный список
    // v - посещенный узел (вершина)
    // t - пункт назначения

    // это общие случаи
    // либо достигли пункта назначения, либо уже посещали узел
    if(v === t) return true
    if(v.visited) return false

    // помечаем узел как посещенный
    v.visited = true
    // исследуем всех соседей (ближайшие соседние вершины) v
    for(let neighbor of adj[v]) {
        // если сосед не посещался
        if(!neighbor.visited) {
            // двигаемся по пути и проверяем, не достигли ли мы пункта назначения
            let reached = dfs(adj, neighbor, t)
            // возвращаем true, если достигли
            if(reached) return true
        }
    }
    // если от v до t добраться невозможно
    return false
}
