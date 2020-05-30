package com.socialopus.springRest.crypto;

public interface Crypt {

    byte[] encrypt(byte[] data);

    byte[] decrypt(byte[] data);
}
