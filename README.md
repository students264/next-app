Update my .NET 10 project so it publishes as a self-contained single-file Windows x64 executable.

Requirements:
1. The user must NOT need to install or download .NET.
2. The final release must contain only YO4X.exe.
3. Include the .NET runtime and ASP.NET Core runtime inside the executable.
4. Use win-x64.
5. Enable PublishSingleFile.
6. Enable IncludeNativeLibrariesForSelfExtract.
7. Configure this permanently in YO4X.csproj if appropriate.
8. Do not include .env, source code, DLLs, or other files in the release.
9. Run a Release publish and verify that the final publish output can be reduced to only YO4X.exe.
10. Give me the exact command to build the final executable.

The publish command should be equivalent to:

dotnet publish -c Release -r win-x64 --self-contained true -p:PublishSingleFile=true -p:IncludeNativeLibrariesForSelfExtract=true
