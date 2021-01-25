import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, TextInput, Dimensions, Platform } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Spinner from 'react-native-loading-spinner-overlay';

//import components
import HeaderBar from '../../components/headerBar';
import Shadow from '../../components/dynamicShadow';
import CardCharacter from '../../components/cardCharacter';
import { getFilter } from '../../API/Services';

//import styles
const styles = require('./styles').styles;
const themeClasses = require('../../styles').themeClasses;
const fontStyles = require('../../styles').fontStyles;
const colors = require('../../styles').colors;
const dimensions = require('../../styles').dimensions;

// page
let page = 1;

export default class Home extends Component {
     constructor(props) {
         super(props)
         this.state={
             isLoading: false,
             characters: Array(),
             refreshing: false,
             nameFilter:"",
             statusFilter:"",
             speciesFilter:"",
             typeFilter:"",
             genderFilter:""
         }
    }

    componentDidMount(){
        this.init()
    }

    async init(){
        await this.setState({isLoading: true})
        const filter = `page=1`
        const characters = await getFilter(filter, "character", null);
        if(characters.info){
            if(characters.results.length){
                await this.setState({
                    characters: characters.results,
                    isLoading:false
                })
            }
            await this.setState({isLoading: false})
        }else{
            await this.setState({isLoading: false})
        }
    }

    async search(){
        await this.setState({
            isLoading: true,
            characters: Array()
        })
        const { nameFilter, statusFilter, speciesFilter, typeFilter, genderFilter } = this.state;
        const filter = `page=1${nameFilter ? "&name="+nameFilter : ""}`+
                        `${statusFilter ? "&status="+statusFilter : ""}`+
                        `${speciesFilter ? "&species="+speciesFilter : ""}` +
                        `${typeFilter ? "&type="+typeFilter : ""}`+
                        `${genderFilter ? "&gender="+genderFilter : ""}`
                        
        const characters = await getFilter(filter, "character", null);
        if(characters.info){
            if(characters.results.length){
                await this.setState({
                    characters: characters.results,
                    isLoading:false
                })
            }
            await this.setState({isLoading: false})
        }else{
            await this.setState({isLoading: false})
        }
    }

    async setFilters(statusFilter, speciesFilter, typeFilter, genderFilter){
        await this.setState({
            statusFilter,
            speciesFilter,
            typeFilter,
            genderFilter
        })
        this.search()
    }

    _handleLoadMore = async () => {
        page = page+1
        await this.setState({isLoading: true})
        const { nameFilter, statusFilter, speciesFilter, typeFilter, genderFilter } = this.state;
        let { characters } = this.state;
        const filter = `page=${page}${nameFilter ? "&name="+nameFilter : ""}`+
                        `${statusFilter ? "&status="+statusFilter : ""}`+
                        `${speciesFilter ? "&species="+speciesFilter : ""}` +
                        `${typeFilter ? "&type="+typeFilter : ""}`+
                        `${genderFilter ? "&gender="+genderFilter : ""}`
                        
        const newCharacters = await getFilter(filter, "character", null);
        console.log(filter, page)
        if(newCharacters.info){
            if(newCharacters.results.length){
                characters = characters.concat(newCharacters.results);
                await this.setState({
                    characters: characters,
                    isLoading:false
                })
            }
            await this.setState({isLoading: false})
        }else{
            await this.setState({isLoading: false})
        }
      };
    
      _handleRefresh = async () => {
        await this.setState({
            refreshing: true
        })
        page = 1
        this.init()
        await this.setState({
            refreshing: false
        })
      };

    _renderItem({item, index}){

        return <CardCharacter 
            name={item.name}
            status={item.status}
            kind={item.species}
            type={item.type}
            gender={item.gender}
            img={item.image}
            animationLeft={index%2 === 0}
            item={item}
        />  
    }

    render() {
        return (
            <View style={[themeClasses.container]}>
                <Spinner
                    visible={this.state.isLoading}
                    textContent={'Cargando...'}
                    textStyle={{color: colors.white}}
                />
                {/* HeaderBar */}
                <HeaderBar
                />
                {/* search */}
                <View 
                    style={styles.containerSearch}
                >
                    <Shadow
                        style={styles.containerInput}
                        removeTop
                    >
                        <TextInput 
                            style={styles.input}
                            placeholder={"Personaje"}
                            onChangeText={(nameFilter)=>{
                                this.setState({nameFilter})
                            }}
                            onEndEditing={()=>{
                                console.log(this.state.nameFilter)
                                this.search()
                            }}
                        />
                    </Shadow>
                </View>
                {/* Button filter */}
                <View
                    style={styles.containerButtonFilter}
                >
                    <TouchableOpacity
                        style={styles.buttonFilter}
                        onPress={()=>{
                            Actions.Filters({
                                setFilters: this.setFilters.bind(this)
                            })
                        }}
                    >
                        <Icon
                            type={"Ionicons"}
                            name={"ios-map-outline"}
                            style={styles.iconMap}
                        />
                        <Text
                            style={[styles.textFilter]}
                        >
                            Filtrar
                        </Text>
                    </TouchableOpacity>
                    {/* Line division */}
                    <View 
                        style={styles.line}
                    />
                </View>
                {/* Subtitle */}
                <View 
                    style={styles.containerSearch}
                >
                    <Text
                        style={fontStyles.h3Bold}
                    >
                        Personajes
                    </Text>
                </View>
                <View style={{width:"100%", ...themeClasses.marginHorizontal}}>
                    <FlatList
                        contentContainerStyle={{
                            paddingBottom: dimensions.height * .4
                          }}
                        data={this.state.characters}
                        onEndReached={this._handleLoadMore}
                        renderItem={this._renderItem}
                        onEndReachedThreshold={Platform.OS === "ios" ? 0 : .5}
                        refreshing={this.state.refreshing}
                        onRefresh={this._handleRefresh}
                    />
                </View>
        </View>
        );
    }
}