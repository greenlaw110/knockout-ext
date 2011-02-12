@echo off 
del /F output\*.*
set AllFiles=
for /f "eol=] skip=1 delims=' " %%i in (source-references.js) do set Filename=%%i& call :Concatenate 

goto :Combine
:Concatenate 
    if /i "%AllFiles%"=="" ( 
        set AllFiles=..\%Filename:/=\%
    ) else ( 
        set AllFiles=%AllFiles%+..\%Filename:/=\%
    ) 
goto :EOF 

:Combine
copy /A /B version-header.js+%AllFiles% output\knockout.ext-latest.debug.js

@rem Now call Google Closure Compiler to produce a minified version
copy /y version-header.js output\knockout.ext-latest.js
tools\curl -d output_info=compiled_code -d output_format=text -d compilation_level=ADVANCED_OPTIMIZATIONS --data-urlencode js_code@output\knockout.ext-latest.debug.js "http://closure-compiler.appspot.com/compile" >> output\knockout.ext-latest.js
