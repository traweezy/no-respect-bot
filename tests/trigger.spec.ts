import 'reflect-metadata';
import 'mocha';
import { expect } from 'chai';
import Trigger from '../src/services/trigger';
import { instance, mock, verify, when } from 'ts-mockito';
import { Message } from 'discord.js';

describe('GIVEN Trigger Service', function () {
  let service: Trigger;
  let triggerMessage: string;
  beforeEach(() => {
    service = new Trigger();
  });

  describe('WHEN the trigger service is sent a string with the valid trigger', function () {
    before(() => {
      triggerMessage = '!no-respect';
    });
    it('THEN it should return true', function () {
      expect(service.isTrigger(triggerMessage)).to.be.true;
    });
  });

  describe('WHEN the trigger service is sent a string with an invalid trigger', function () {
    before(() => {
      triggerMessage = '!nope';
    });
    it('THEN it should return false', function () {
      expect(service.isTrigger(triggerMessage)).to.be.false;
    });
  });
});
