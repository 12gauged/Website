import type { UserConfig } from "@unocss/core"
import presetUno from "@unocss/preset-uno"
import presetWind from "@unocss/preset-wind"

// @ref https://github.com/unocss/unocss#configurations
export default <UserConfig> {
	presets: [presetUno(), presetWind()],
}
