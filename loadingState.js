<script type="text/javascript">
 
var loadingState = new Kiwi.State( "LoadingState" );
 
loadingState.preload = function(){
    //AFEGIR TOT EL QUE HI HA A LA FUNCIO DEL PRELOAD
}
 
loadingState.create = function(){
    this.game.states.switchState( "startingState" );
}
</script>