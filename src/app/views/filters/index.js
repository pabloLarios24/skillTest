import React, { Component, createRef } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Popover from 'react-native-popover-view';
import { Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

//import components
import HeaderBar from '../../components/headerBar';
import Shadow from '../../components/dynamicShadow';

//import data of filters
import { speciesFiltersCommon, typesFilterCommon } from '../../common/filters';


//import styles
const styles = require('./styles').styles;
const themeClasses = require('../../styles').themeClasses;
const fontStyles = require('../../styles').fontStyles;
const colors = require('../../styles').colors;

export default class Filters extends Component {
     constructor(props) {
         super(props)
         this.touchableSpecies = createRef();
         this.touchableGender = createRef();
         this.touchableTypes = createRef();
         this.touchableStatus = createRef();
         this.state={
             isLoading: false,
             characters: Array(),
             refreshing: false,
             showPopoverSpecies: false,
             showPopoverStatus: false,
             showPopoverGender: false,
             showPopoverTypes: false,
             statusFilter:"",
             speciesFilter:"",
             typeFilter:"",
             genderFilter:""
         }
    }

    async closePopOver(filter, result){
        if(filter === "species"){
            await this.setState({
                showPopoverSpecies: false,
                speciesFilter: result 
            })
        }else if(filter === "genders"){
            await this.setState({
                showPopoverGender: false,
                genderFilter: result 
            })
        }else if(filter === "types"){
            await this.setState({
                showPopoverTypes: false,
                typeFilter: result 
            })
        }else if(filter === "status"){
            await this.setState({
                showPopoverStatus: false,
                statusFilter: result 
            })
        }
    }

    search(){
        const { setFilters } = this.props;
        const { statusFilter, speciesFilter, typeFilter, genderFilter } = this.state;
        setFilters(statusFilter, speciesFilter, typeFilter, genderFilter);
        Actions.pop()
    }

    render() {
        const { statusFilter, speciesFilter, typeFilter, genderFilter, showPopoverGender, showPopoverSpecies, showPopoverTypes, showPopoverStatus } = this.state;
        return (
            <View style={[themeClasses.container]}>
                {/* HeaderBar */}
                <HeaderBar
                    isBack
                />
                {/* filter kind */}
                <TouchableOpacity 
                    style={styles.containerSearch}
                    ref={this.touchableSpecies}
                    onPress={()=>{
                        this.setState({
                            showPopoverSpecies: true
                        })
                    }}
                >
                    <Shadow
                        style={styles.containerInput}
                        removeTop
                    >
                        <View
                            style={styles.containerText}
                        >
                            <Text
                                style={fontStyles.h3}
                            >
                                {
                                    speciesFilter ?
                                        speciesFilter
                                    :
                                        "Especie"
                                }
                            </Text>
                        </View>
                        <View
                            style={styles.containerIcon}
                        >
                            <Icon 
                                type={"Entypo"} 
                                name= { showPopoverSpecies ? "chevron-thin-up" : "chevron-thin-down" }
                                style={ styles.icon } 
                            />
                        </View>
                    </Shadow>
                </TouchableOpacity>
                {/* filter status */}
                <TouchableOpacity 
                    style={styles.containerSearch}
                    ref={this.touchableStatus}
                    onPress={()=>{
                        this.setState({
                            showPopoverStatus: true
                        })
                    }}
                >
                    <Shadow
                        style={styles.containerInput}
                        removeTop
                    >
                        <View
                            style={styles.containerText}
                        >
                            <Text
                                style={fontStyles.h3}
                            >
                                {
                                    statusFilter ?
                                        statusFilter
                                    :
                                        "Estatus"
                                }
                            </Text>
                        </View>
                        <View
                            style={styles.containerIcon}
                        >
                            <Icon 
                                type={"Entypo"} 
                                name= { showPopoverStatus ? "chevron-thin-up" : "chevron-thin-down" }
                                style={ styles.icon } 
                            />
                        </View>
                    </Shadow>
                </TouchableOpacity>
                {/* filter type */}
                <TouchableOpacity 
                    style={styles.containerSearch}
                    ref={this.touchableTypes}
                    onPress={()=>{
                        this.setState({
                            showPopoverTypes: true
                        })
                    }}
                >
                    <Shadow
                        style={styles.containerInput}
                        removeTop
                    >
                        <View
                            style={styles.containerText}
                        >
                            <Text
                                style={fontStyles.h3}
                            >
                                {
                                    typeFilter ?
                                        typeFilter
                                    :
                                        "Especie"
                                }
                            </Text>
                        </View>
                        <View
                            style={styles.containerIcon}
                        >
                            <Icon 
                                type={"Entypo"} 
                                name= { showPopoverTypes ? "chevron-thin-up" : "chevron-thin-down" }
                                style={ styles.icon } 
                            />
                        </View>
                    </Shadow>
                </TouchableOpacity>
                {/* filter gener */}
                <TouchableOpacity 
                    style={styles.containerSearch}
                    ref={this.touchableGender}
                    onPress={()=>{
                        this.setState({
                            showPopoverGender: true
                        })
                    }}
                >
                    <Shadow
                        style={styles.containerInput}
                        removeTop
                    >
                        <View
                            style={styles.containerText}
                        >
                            <Text
                                style={fontStyles.h3}
                            >
                                {
                                    genderFilter ?
                                        genderFilter
                                    :
                                        "Género"
                                }
                            </Text>
                        </View>
                        <View
                            style={styles.containerIcon}
                        >
                            <Icon 
                                type={"Entypo"} 
                                name= { showPopoverGender ? "chevron-thin-up" : "chevron-thin-down" }
                                style={ styles.icon } 
                            />
                        </View>
                    </Shadow>
                </TouchableOpacity>
                {/* Button search */}
                <View
                    style={styles.containerButtonFilter}
                >
                    <TouchableOpacity
                        style={styles.buttonFilter}
                        onPress={()=>{
                            this.search()
                        }}
                    >
                        <Text
                            style={[styles.textFilter]}
                        >
                            Buscar
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* Filters species */}
                <Popover 
                    from={this.touchableSpecies} 
                    onRequestClose={()=>{
                        this.closePopOver("species", "")
                    }}
                    isVisible={this.state.showPopoverSpecies} 
                >
                    <TouchableOpacity
                        style={styles.containerItemSelect}
                        onPress={()=>{
                            this.closePopOver("species", "")
                        }}
                    >
                            <Text
                                style={fontStyles.h3}
                            >
                                Especie
                            </Text>
                    </TouchableOpacity>
                    {
                        speciesFiltersCommon.map((item)=>(
                        <TouchableOpacity
                            style={styles.containerItemSelect}
                            onPress={()=>{
                                this.closePopOver("species", item.specie)
                            }}
                        >
                            <Text
                                style={fontStyles.h3}
                            >
                                {
                                   item.specie
                               }
                            </Text>
                        </TouchableOpacity>
                        ))
                    }
                </Popover>
                {/* Filters types */}
                <Popover 
                    from={this.touchableTypes} 
                    onRequestClose={()=>{
                        this.closePopOver("types", "")
                    }}
                    isVisible={this.state.showPopoverTypes} 
                >
                    <TouchableOpacity
                        style={styles.containerItemSelect}
                        onPress={()=>{
                            this.closePopOver("types", "")
                        }}
                    >
                            <Text
                                style={fontStyles.h3}
                            >
                                Tipo
                            </Text>
                    </TouchableOpacity>
                    {
                        typesFilterCommon.map((item)=>(
                        <TouchableOpacity
                            style={styles.containerItemSelect}
                            onPress={()=>{
                                this.closePopOver("types", item.type)
                            }}
                        >
                            <Text
                                style={fontStyles.h3}
                            >
                               {
                                   item.type
                               }
                            </Text>
                        </TouchableOpacity>
                        ))
                    }
                </Popover>
                {/* Filters gender */}
                <Popover 
                    onRequestClose={()=>{
                        this.closePopOver("genders", "")
                    }}
                    from={this.touchableGender} 
                    isVisible={this.state.showPopoverGender} 
                >
                    <TouchableOpacity
                        style={styles.containerItemSelect}
                        onPress={()=>{
                            this.closePopOver("genders", "")
                        }}
                    >
                            <Text
                                style={fontStyles.h3}
                            >
                                Género
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.containerItemSelect}
                        onPress={()=>{
                            this.closePopOver("genders", "female")
                        }}
                    >
                            <Text
                                style={fontStyles.h3}
                            >
                                Female
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.containerItemSelect}
                        onPress={()=>{
                            this.closePopOver("genders", "male")
                        }}
                    >
                            <Text
                                style={fontStyles.h3}
                            >
                                Male
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.containerItemSelect}
                        onPress={()=>{
                            this.closePopOver("genders", "genderless")
                        }}
                    >
                            <Text
                                style={fontStyles.h3}
                            >
                                Genderless
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.containerItemSelect}
                        onPress={()=>{
                            this.closePopOver("genders", "unknown")
                        }}
                    >
                            <Text
                                style={fontStyles.h3}
                            >
                                unknown
                            </Text>
                    </TouchableOpacity>
                </Popover>
                {/* Filters status */}
                <Popover 
                    onRequestClose={()=>{
                        this.closePopOver("status", "")
                    }}
                    from={this.touchableStatus} 
                    isVisible={this.state.showPopoverStatus} 
                >
                    <TouchableOpacity
                        style={styles.containerItemSelect}
                        onPress={()=>{
                            this.closePopOver("status", "")
                        }}
                    >
                            <Text
                                style={fontStyles.h3}
                            >
                                Estatus
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.containerItemSelect}
                        onPress={()=>{
                            this.closePopOver("status", "alive")
                        }}
                    >
                            <Text
                                style={fontStyles.h3}
                            >
                                Alive
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.containerItemSelect}
                        onPress={()=>{
                            this.closePopOver("status", "dead")
                        }}
                    >
                            <Text
                                style={fontStyles.h3}
                            >
                                Dead
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.containerItemSelect}
                        onPress={()=>{
                            this.closePopOver("status", "unknown")
                        }}
                    >
                            <Text
                                style={fontStyles.h3}
                            >
                                Unknown
                            </Text>
                    </TouchableOpacity>
                </Popover>
            </View>
        );
    }
}