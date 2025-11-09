import type { TreeShakeImportResolver } from "@monstermann/tree-shake-import-namespaces"

const treeshake: TreeShakeImportResolver = function ({ importAlias, importName, importPath, propertyName }) {
    if (importPath === "@monstermann/geometry" && importName === "Rect")
        return `import { ${propertyName} as ${importAlias} } from "@monstermann/geometry/Rect/${propertyName}.js"`
    return undefined
}

export default treeshake
