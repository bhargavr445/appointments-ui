# build cmd
ng build --configuration production --output-path docs --base-href "/" --prerender=false

# above command will generate following folder  `docs -> browser`, make sure to move all the [files/folders] from `browser to under docs folder`