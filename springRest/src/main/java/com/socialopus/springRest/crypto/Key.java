package com.socialopus.springRest.crypto;

public class Key implements Crypt {

    @Override
    public byte[] encrypt(byte[] data) {

       return data;
    }

    @Override
    public byte[] decrypt(byte[] data) {

        return data;
    }

}
