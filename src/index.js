export default function ({types: t}) {
	return {
		visitor: {
			BinaryExpression: {
				enter(path,state){
					if (path.node.operator !== ">>") {
						return;
					}

					path.replaceWith(
						t.logicalExpression("||", 
							t.unaryExpression(
								"!",
								path.node.left
							), 
							path.node.right)
					)
				}
			}
		}
	}
}
