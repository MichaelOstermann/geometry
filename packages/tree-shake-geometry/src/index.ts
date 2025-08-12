import type { TreeShakeImportResolver } from "@monstermann/tree-shake-import-namespaces"

const treeshake: TreeShakeImportResolver = function ({ importAlias, importName, importPath, propertyName }) {
    if (importPath !== "@monstermann/geometry") return
    if (importName !== "Rect") return
    return `import { ${propertyName} as ${importAlias} } from "@monstermann/geometry/Rect/${propertyName}.js"`
}

export default treeshake
