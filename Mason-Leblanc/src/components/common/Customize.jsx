import { Palette, X, Sun, Moon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { themeColors, themeFonts } from "../../redux/features/themes/themes";
import { setColor, setFont, setThemeMode } from "../../redux/features/themes/themesSlice";
import { useState } from "react";

function Customize() {
const { generalColorId, generalFontId, generalThemeMode } = useSelector((state) => state.themes);
  const dispatch = useDispatch();
  const [ show , setShow ] = useState(false)
  return (
    <div className={`w-75 fixed z-50 top-0 bottom-0 right-0 bg-bg-layout ${show? "" : "translate-x-full"} transition-all duration-300`}>

      <div className="relative">
        <button
          className={`
            absolute left-0 top-[50%] -z-1
            translate-y-[-50%] translate-x-[-90%]
            flex items-center group
            p-3 rounded-l-full bg-bg-layout cursor-pointer
            ${show ? "text-primary" : "text-text-muted"} hover:text-primary
          `}
          onClick={() => setShow(!show)}
        >
          <Palette size={25} />
          <span className={`overflow-hidden w-0 group-hover:w-23 ${show ? "w-23" : ""} transition-all duration-300`}>Customize</span>
        </button>
        
        <div className="relative p-6 flex justify-between items-center">
          <h3 className="capitalize w-[80%] text-sm font-semibold opacity-90">
            Fashion Photography Portfolio
          </h3>

          <button
            className="
              p-1.5 rounded-md cursor-pointer transition-all
              border border-primary/30 hover:border-primary
            "
            onClick={() => setShow(false)}
          >
            <X size={19} />
          </button>

          <div
            className="
              absolute left-0 right-0 bottom-0
              h-px
              bg-primary/20
              shadow-[0_3px_8px_0_var(--primary)]
            "
          />
        </div>

        <div className="p-6">

          <p className="text-sm text-text-muted pt-2 pb-9">
            Use the template as-is or try different colors and fonts from the
            options below.
          </p>

          <div className="mb-7">
            <h4 className="text-sm font-semibold">
              Appearance
            </h4>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => dispatch(setThemeMode("light"))}
                className={`
                  flex-1 py-2.5 rounded-md border
                  flex justify-center items-center gap-2
                  transition-all duration-200 cursor-pointer
                  ${
                    generalThemeMode === "light"
                      ? "border-primary ring-2 ring-primary/30"
                      : "border-primary/30 hover:border-primary"
                  }
                `}
              >
                <Sun size={17} />
                <span className="text-sm">Light</span>
              </button>

              <button
                onClick={() => dispatch(setThemeMode("dark"))}
                className={`
                  flex-1 py-2.5 rounded-md border
                  flex justify-center items-center gap-2
                  transition-all duration-200 cursor-pointer
                  ${
                    generalThemeMode === "dark"
                      ? "border-primary ring-2 ring-primary/30"
                      : "border-primary/30 hover:border-primary"
                  }
                `}
              >
                <Moon size={17} />
                <span className="text-sm">Dark</span>
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold">
              Try Other Fonts
            </h4>

            <div className="grid grid-cols-4 gap-2 mt-4">
              {themeFonts.map((theme) => (
                <button
                  key={theme.fontId}
                  onClick={() => dispatch(setFont(theme.fontId))}
                  className={`
                    px-2.5 py-1.5 
                    rounded-md border
                    flex justify-center items-center gap-0.5
                    transition-all duration-200 cursor-pointer
                    ${
                      theme.fontId === generalFontId
                        ? "border-primary ring-2 ring-primary/30"
                        : "border-primary/30 hover:border-primary"
                    }
                  `}
                >
                  <span
                    className="font-bold text-lg"
                    style={{
                      fontFamily: `${theme.headingFont}, sans-serif`,
                    }}
                  >
                    A
                  </span>

                  <span
                    className="text-lg"
                    style={{
                      fontFamily: `${theme.textFont}, sans-serif`,
                    }}
                  >
                    a
                  </span>
                </button>
              ))}
            </div>
            
          </div>

          <hr className="my-4 text-primary" />

          {/* Colors */}
          <div>
            <h4 className="text-sm font-semibold">
              Try Other Colors
            </h4>

            <div className="grid grid-cols-4 gap-2 mt-4">
              {themeColors.map((theme) => (
                <button
                  key={theme.colorId}
                  onClick={() => dispatch(setColor(theme.colorId))}
                  className={`
                    py-2
                    rounded-md border
                    flex justify-center items-center gap-1
                    transition-all duration-200 cursor-pointer
                    ${
                      theme.colorId === generalColorId
                        ? "border-primary ring-2 ring-primary/30"
                        : "border-primary/30 hover:border-primary"
                    }
                  `}
                >
                  <div
                    className="w-4.5 h-4.5 rounded-full"
                    style={{backgroundColor: theme.previewColor1}}
                  />

                  <div
                    className="w-4.5 h-4.5 rounded-full"
                    style={{backgroundColor: theme.previewColor2}}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customize;