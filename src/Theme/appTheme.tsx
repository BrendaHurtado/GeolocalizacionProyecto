import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20
  },
  title: {
    fontSize: 30,
    marginBottom: 10
  },
  botonGrande: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  botonTexto: {
    color: 'white',
    fontSize: 18
  },
  textoCliente:{
    fontWeight:'800',
    fontSize:20,
    color:'black',
    left:25,
    marginTop:10
  },
  textConfiguraciones:{
    fontSize:12,
    color:'black',
    left:25,
    marginTop:10
  },
  avatarCuadro:{
    alignItems: 'flex-end',
    right:15,
    position:'absolute',
    marginTop:8,
    marginHorizontal:20
  },
  avatarContainer: {
    backgroundColor:'#dfdfdf',
    height:100
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100
  },
  menuContainer: {
    padding:25,
    backgroundColor:'white',
    alignItems: 'flex-start',
    height:680,
    borderTopEndRadius:25
  },
  menuBoton: {
    marginVertical: 14
  },
  menuTexto: {
    fontSize: 15,
    color: 'black',
    left:15,
    fontWeight:'500'
  },
  menuPromociones:{
    marginTop:20
  },
  contenedorCuadro: {
    height: 150,
    backgroundColor: 'white'
  },
  contenidoCuadroVentas:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  tituloCuadroVentas:{
    fontSize:25,
    fontWeight:'700'
  },
  subtituloCuadroVentas:{
    fontWeight:'500'
  }
});