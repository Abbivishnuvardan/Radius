import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { Color, FontSize, Padding, Border, FontFamily } from "../GlobalStyles";

const LogIn = () => {
  return (
    <View style={styles.logIn}>
      <View style={[styles.logo, styles.orLayout]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={styles.radius} numberOfLines={17}>
          RADIUS
        </Text>
      </View>
      <View style={[styles.header, styles.cta1SpaceBlock]}>
        <Text style={[styles.title, styles.titleClr]}>Login</Text>
        <Text style={[styles.subtitle, styles.socialsSpaceBlock]}>
          Welcome back. Enter your credentials to access your account
        </Text>
      </View>
      <View style={[styles.email, styles.cta1SpaceBlock]}>
        <Text style={[styles.label, styles.labelTypo1]} numberOfLines={15}>
          Email Address
        </Text>
        <View style={styles.bar}>
          <TextInput
            style={[styles.text, styles.textPosition]}
            placeholder="hello@example.c"
            placeholderTextColor="#191d23"
          />
          <Pressable style={[styles.cta, styles.ctaSpaceBlock]}>
            <Text style={[styles.label1, styles.labelTypo]}>Send OTP</Text>
          </Pressable>
        </View>
      </View>
      <Text style={[styles.subtitle1, styles.subtitleTypo]}>
        Enter Authentication Code
      </Text>
      <View style={[styles.digitCode, styles.cta1SpaceBlock]}>
        <View style={styles.controlsTextFields}>
          <TextInput
            style={styles.text1}
            keyboardType="number-pad"
            placeholderTextColor="#090a0a"
          />
        </View>
      </View>
      <Pressable style={[styles.cta1, styles.ctaSpaceBlock]}>
        <Text style={[styles.label2, styles.labelTypo]}>Submit</Text>
      </Pressable>
      <View style={[styles.bottom, styles.cta1SpaceBlock]}>
        <View style={styles.container}>
          <View style={[styles.or, styles.orLayout]}>
            <View style={styles.orSignInWithWrapper}>
              <Text
                style={[styles.orSignIn, styles.labelTypo1]}
                numberOfLines={15}
              >
                or sign in with
              </Text>
            </View>
            <View style={styles.orChild} />
          </View>
          <View style={[styles.socials, styles.socialsSpaceBlock]}>
            <Pressable style={[styles.googleButton, styles.buttonBorder]}>
              <View style={styles.googleLogo}>
                <Image
                  style={styles.logoGoogleg48dp}
                  contentFit="cover"
                  source={require("../assets/logo-googleg-48dp.png")}
                />
              </View>
              <Text style={[styles.google, styles.titleClr]}>Google</Text>
            </Pressable>
            <Pressable style={[styles.appleButton, styles.buttonBorder]}>
              <View style={styles.facebookLogo}>
                <Image
                  style={styles.logoGoogleg48dp}
                  contentFit="cover"
                  source={require("../assets/path14.png")}
                />
              </View>
              <Text style={[styles.google, styles.titleClr]}>Facebook</Text>
            </Pressable>
          </View>
        </View>
        <Pressable style={styles.dontHaveAn} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  orLayout: {
    width: 286,
    alignItems: "center",
  },
  cta1SpaceBlock: {
    marginTop: 21,
    alignSelf: "stretch",
  },
  titleClr: {
    color: Color.neutral800,
    textAlign: "left",
  },
  socialsSpaceBlock: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  labelTypo1: {
    height: 19,
    fontSize: FontSize.size_sm,
    overflow: "hidden",
    textAlign: "left",
  },
  textPosition: {
    zIndex: 0,
    fontSize: FontSize.size_sm,
  },
  ctaSpaceBlock: {
    paddingVertical: Padding.p_7xs,
    backgroundColor: Color.steelblue,
    paddingHorizontal: Padding.p_xs,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_9xs,
  },
  labelTypo: {
    textAlign: "center",
    color: Color.shadesWhite,
    fontFamily: FontFamily.manropeSemibold,
    fontWeight: "600",
  },
  subtitleTypo: {
    color: Color.neutral500,
    fontFamily: FontFamily.manropeRegular,
    textAlign: "left",
  },
  buttonBorder: {
    borderColor: "#d0d5dd",
    padding: Padding.p_5xs,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    borderRadius: Border.br_9xs,
  },
  vectorIcon: {
    width: 24,
    height: 20,
  },
  radius: {
    fontSize: 20,
    fontWeight: "800",
    fontFamily: FontFamily.openSansExtrabold,
    height: 22,
    marginLeft: 8,
    overflow: "hidden",
    textAlign: "left",
    flex: 1,
  },
  logo: {
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    height: 30,
    alignSelf: "stretch",
  },
  subtitle: {
    color: Color.neutral500,
    fontFamily: FontFamily.manropeRegular,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    marginTop: 8,
  },
  header: {
    height: 93,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontFamily: FontFamily.manropeSemibold,
    fontWeight: "600",
    height: 19,
    color: Color.neutral800,
    alignSelf: "stretch",
  },
  text: {
    fontFamily: FontFamily.manropeRegular,
    flex: 1,
  },
  label1: {
    width: 71,
    zIndex: 0,
    fontSize: FontSize.size_sm,
  },
  cta: {
    position: "absolute",
    top: 4,
    right: 15,
    justifyContent: "flex-end",
    zIndex: 1,
  },
  bar: {
    borderColor: "#64748b",
    borderWidth: 1.5,
    height: 43,
    paddingVertical: Padding.p_5xs,
    marginTop: 4,
    paddingHorizontal: Padding.p_xs,
    borderStyle: "solid",
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_9xs,
  },
  email: {
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle1: {
    fontSize: 15,
    marginTop: 21,
    alignSelf: "stretch",
  },
  text1: {
    fontFamily: FontFamily.regularNoneRegular,
    fontSize: FontSize.regularNoneRegular_size,
  },
  controlsTextFields: {
    borderRadius: 64,
    borderColor: "#e3e5e5",
    width: 288,
    height: 50,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.shadesWhite,
  },
  digitCode: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  label2: {
    fontSize: FontSize.regularNoneRegular_size,
    flex: 1,
  },
  cta1: {
    marginTop: 21,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  orSignIn: {
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    color: Color.neutral600,
    flex: 1,
  },
  orSignInWithWrapper: {
    width: 112,
    padding: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.shadesWhite,
  },
  orChild: {
    borderColor: "#4b5768",
    borderTopWidth: 1,
    marginTop: -17,
    borderStyle: "solid",
    alignSelf: "stretch",
    flex: 1,
  },
  or: {
    height: 67,
    paddingHorizontal: 50,
    paddingTop: 18,
    paddingBottom: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  logoGoogleg48dp: {
    width: 16,
    height: 16,
  },
  googleLogo: {
    flexDirection: "row",
  },
  google: {
    fontSize: FontSize.size_xs,
    marginLeft: 6,
    fontFamily: FontFamily.manropeRegular,
  },
  googleButton: {
    opacity: 0.8,
  },
  facebookLogo: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  appleButton: {
    marginLeft: 4,
  },
  socials: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  container: {
    alignSelf: "stretch",
  },
  dontHaveAn: {
    marginTop: 32,
    alignSelf: "stretch",
  },
  bottom: {
    alignItems: "center",
  },
  logIn: {
    width: "100%",
    height: 612,
    padding: 24,
    flex: 1,
    backgroundColor: Color.shadesWhite,
    borderRadius: Border.br_9xs,
  },
});

export default LogIn;
