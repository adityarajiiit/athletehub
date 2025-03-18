import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
import crypto from 'crypto';
import { Fitbit } from '../models/fitbit.model.js';
import { access } from 'fs';

export const generateCodeVerifier=()=>{
    return crypto.randomBytes(64).toString('base64')
    .replace(/\+/g,'-')
    .replace(/\//g,'_')
    .replace(/=/g,'')
    .substring(0,128);
}

export const generateCodeChallenge=(codeVerifier)=>{
    return crypto.createHash('sha256')
    .update(codeVerifier)
    .digest('base64')
    .replace(/\+/g,'-')
    .replace(/\//g,'_')
    .replace(/=/g,'');
}

export const generateState=()=>{
    return crypto.randomBytes(16).toString('hex');
}

export const getFitbitUrl=async(codeVerifier,state)=>{
    const codeChallenge=generateCodeChallenge(codeVerifier);
    const clientId=process.env.FITBIT_CLIENT_ID;
const redirectUri=process.env.FITBIT_REDIRECT_URI;
const scope="activity cardio_fitness electrocardiogram heartrate irregular_rhythm_notifications location nutrition oxygen_saturation profile respiratory_rate settings sleep social temperature weight";
return `https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(scope)}&code_challenge=${codeChallenge}&code_challenge_method=S256&state=${state}&redirect_uri=${encodeURIComponent(redirectUri)}`;
}

export const exchangeCodeForToken=async(code,codeVerifier)=>{
    const clientId=process.env.FITBIT_CLIENT_ID;
    const redirectUri=process.env.FITBIT_REDIRECT_URI;
    try{
        const response=await axios({
            method:'POST',
            url:'https://api.fitbit.com/oauth2/token',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'},
                data:{
                    client_id:clientId,
                    grant_type:'authorization_code',
                    redirect_uri:redirectUri,
                    code:code,
                    code_verifier:codeVerifier
                }

                
        });
        return {
            accessToken:response.data.access_token,
            refreshToken:response.data.refresh_token,
            expiresIn:new Date(Date.now()+response.data.expires_in*1000),
            scope:response.data.scope,
            userId:response.data.user_id
        }
    }
    catch(error){
        console.error("Error exchanging code for token:",error);
        throw new Error("Error exchanging code for token");
    }
}

export const refreshAccessToken=async(refreshToken)=>{
    const clientId=process.env.FITBIT_CLIENT_ID;
    try{
        const response=await axios({
            method:'POST',
            url:'https://api.fitbit.com/oauth2/token',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            },
            data:{
                client_id:clientId,
                grant_type:'refresh_token',
                refresh_token:refreshToken
            }
        });
        return{
            accessToken:response.data.access_token,
            refreshToken:response.data.refresh_token,
            expiresIn:new Date(Date.now()+response.data.expires_in*1000)
        }
    }
    catch(error){
        console.error("Error refreshing token:",error);
        throw new Error("Error refreshing token");
    }
}

export const getFitbitData=async(userId,endpoint)=>{
    try{
        const tokenData=await Fitbit.findOne({userId});
        if(!tokenData){
            throw new Error("No token data found");
        }
        if(new Date()>=tokenData.expiresIn){
            const newToken=await refreshAccessToken(tokenData.refreshToken);
            tokenData.accessToken=newToken.accessToken;
            tokenData.refreshToken=newToken.refreshToken;
            tokenData.expiresIn=newToken.expiresIn
            await tokenData.save();
        }
        const response=await axios({
            method:'GET',
            url:`https://api.fitbit.com/1/user/${tokenData.fitbitUserId}/${endpoint}`,
            headers:{
                'Authorization':`Bearer ${tokenData.accessToken}`
            }
        })
        tokenData.lastSync=Date.now();
        await tokenData.save();
        return response.data;

    }catch(error){
        console.error("Error getting fitbit data:",error);
        throw new Error("Error getting fitbit data");
    }
}